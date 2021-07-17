import {useEffect, useState} from "react";
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import auth from "../../utils/Auth";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/currentUserContext";


function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([])
  const [keywordSavedMovies, setKeywordSavedMovies] = useState(''); // Было 4 утра, я писал как мог

  const [isShortMovies, setIsShortMovies] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const [searchResponse, setSearchResponse] = useState("");
  const [savedSearchResponse, setSavedSearchResponse] = useState("");

  const history = useHistory();
  const location = useLocation().pathname;

  //проверяем токен
  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      if (token) {
        auth.getContent(token)
          .then((res) => {
            if (res) {
              setCurrentUser(res);
            }

            setLoggedIn(true);
            history.push("/movies");
          })
      }
    }
  }

  const handleLogin = (email, password) => {
    auth.signin(password, email)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res.data);

          localStorage.setItem('jwt', res.token);
          history.push('/movies');
        }
      })
  }

  const handleRegister = (email, password, name) => {
    auth.signup(password, email, name)
      .then((res) => {
        if (res) {
          history.push('/signin');
        }
      })
  }

  const handleUpdateUser = (name, email) => {
    mainApi.setUserInfo(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser({
            ...currentUser,
            name: res.name,
            email: res.email,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    history.push('/');
  }

  // Загружаем фильмы, сохраняем локально
  useEffect(() => {
    moviesApi
      .getFilms()
      .then((res) => {
        setAllMovies(res.map((item) => {
          return {
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
          }
        }));
      })
      .catch((err) => {
        setSearchResponse("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер " +
            "недоступен. Подождите немного и попробуйте ещё раз");
        console.log(err)
      });

    getSavedMovies();
  }, []);

  // Проверяем токен
  useEffect(() => {
    tokenCheck();
  }, []);

  const handleCheckShortMovies = (checked) => {
    setIsLoading(true);
    setIsShortMovies(checked);

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }

  const addMovie = (movie) => {
    mainApi.createMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      movie.image,
      movie.trailer,
      movie.thumbnail,
      movie.nameRU,
      movie.nameEN,
      movie.movieId)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => console.log(err));
  }

  const getSavedMovies = () => {
    mainApi.getMovies()
      .then((res) => {
        setSavedMovies(res);
        setSearchedSavedMovies(searchMovies(res, keywordSavedMovies));
      })
      .catch((err) => {
        setSavedSearchResponse("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер " +
            "недоступен. Подождите немного и попробуйте ещё раз");
        console.log(err)
      });
  }

  const removeMovies = (movie) => {
    const movieId = savedMovies.find(item => item.movieId === movie.movieId)._id;
    mainApi.deleteMovie(movieId)
      .then((res) => {
        getSavedMovies();
        console.log(res.message);
      })
      .catch((err) => console.log(err));
  }

  const filterShortMovies = (movies) => {
    return movies.filter(movie => movie.duration <= 40)
  }

  const searchMovies = (arr, keyword) => {
    const movies = arr.filter(item => {
      return (item.nameRU && item.nameRU.toLowerCase().includes(keyword.toLowerCase())) ||
        (item.nameEN && item.nameEN.toLowerCase().includes(keyword.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(keyword.toLowerCase()))
    });

    if (movies.length === 0 && location === "/movies") {
      setSearchResponse("Ничего не найдено");
    }
    if (movies.length === 0 && location === "/saved-movies") {
      setSavedSearchResponse("Вы не сохраняли данный фильм");
    }

    return movies;
  }

  const handleSearch = (keyword) => {
    setIsLoading(true);
    const movies = searchMovies(allMovies, keyword);

    setSearchedMovies(movies);
    localStorage.setItem('searchedMovies', JSON.stringify(movies));

    if (isShortMovies) {
      setSearchedMovies(filterShortMovies(searchedMovies));
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }

  const handleSavedSearch = (keyword) => {
    setIsLoading(true);
    const movies = searchMovies(savedMovies, keyword);

    setSearchedSavedMovies(movies);
    localStorage.setItem('searchedSavedMovies', JSON.stringify(movies));

    setKeywordSavedMovies(keyword);

    if (isShortMovies) {
      setSearchedSavedMovies(filterShortMovies(searchedSavedMovies));
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }

  const sortShortMovies = (movies) => {
    return movies.filter(movie => movie.duration <= 40);
  }

  const handleBookmarks = (movie, isBookmarks) => {
    !isBookmarks ? addMovie(movie) : removeMovies(movie);
  }

  const handleBookmarksStatus = (movie) => {
    return savedMovies.some(savedMovie => savedMovie.movieId === movie.movieId);
  }

  const getRenderedSavedMovies = () => {
    return !searchedSavedMovies.length ? savedMovies : searchedSavedMovies;
  }

  return (
      <>
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
            <Header/>
            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>

              <ProtectedRoute
                  path="/movies"
                  onSearch={handleSearch}
                  searchResponse={searchResponse}
                  isShortChecked={isShortMovies}
                  onShortChange={handleCheckShortMovies}
                  onBookmarks={handleBookmarks}
                  bookmarksStatus={handleBookmarksStatus}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                  component={Movies}
                  movies={searchedMovies}
                  shortMovies={sortShortMovies(searchedMovies)}
              />

              <ProtectedRoute
                  path="/saved-movies"
                  onSearch={handleSavedSearch}
                  searchResponse={savedSearchResponse}
                  isShortChecked={isShortMovies}
                  onShortChange={handleCheckShortMovies}
                  onBookmarks={handleBookmarks}
                  bookmarksStatus={handleBookmarksStatus}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  component={SavedMovies}
                  movies={getRenderedSavedMovies()}
                  shortMovies={sortShortMovies(getRenderedSavedMovies())}
              />

              <ProtectedRoute
                  path="/profile"
                  loggedIn={loggedIn}
                  onEditProfile={handleUpdateUser}
                  onLogout={handleLogout}
                  component={Profile}
              />

              <Route path="/signup">
                <Register onRegister={handleRegister}/>
              </Route>

              <Route path="/signin">
                <Login onLogin={handleLogin}/>
              </Route>

              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
            <Footer/>
          </div>
        </CurrentUserContext.Provider>
      </>
  );
}

export default App;
