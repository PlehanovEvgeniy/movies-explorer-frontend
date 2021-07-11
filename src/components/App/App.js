import React from "react";
import { Route, Switch } from "react-router";
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
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <div className="page">
      <Switch>

        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>

        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header />
          <Profile />
        </Route>

        <Route path="/signup">
          <Header />
          <Register />
        </Route>

        <Route path="/signin">
          <Header />
          <Login />
        </Route >

        <Route path="/navigation">
          <Navigation />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
