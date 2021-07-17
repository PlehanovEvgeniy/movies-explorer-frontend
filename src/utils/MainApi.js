export class MainApi {
    constructor(url) {
        this._url = url;
    }

    getUserInfo() {
        return this._getRequest('/users/me');
    }

    setUserInfo(name, email) {
        return this._patchRequest('/users/me', {
            name,
            email
        });
    }

    createMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        nameRU,
        nameEN,
        movieId,
    ) {
        return this._postRequest('/movies', {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            thumbnail,
            nameRU,
            nameEN,
            movieId,
        });
    }

    deleteMovie(movieId) {
        return this._deleteRequest(`/movies/${movieId}`);
    }

    getMovies() {
        return this._getRequest('/movies');
    }

    _deleteRequest(url) {
        return this._request(url, 'DELETE');
    }

    _putRequest(url) {
        return this._request(url, 'PUT');
    }

    _postRequest(url, body) {
        return this._request(url, 'POST', body);
    }

    _patchRequest(url, body) {
        return this._request(url, 'PATCH', body);
    }

    _getRequest(url) {
        return this._request(url, 'GET');
    }

    _headers(method) {
        const headers = {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        };

        if (method !== 'GET') {
          headers['Content-Type'] = 'application/json';
        }

        return headers;
      }

      _request(url, method, body) {
        const option = {
            method: method,
            headers: this._headers(method),
        };

        if (body) {
            option.body = JSON.stringify(body);
        }

        return fetch(`${this._url}${url}`, option)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
      }
}
const mainApi = new MainApi('https://api.diploma.plekhanov.nomoredomains.icu');

export default mainApi;
