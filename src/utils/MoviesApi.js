class MoviesApi {
    constructor (baseUrl) {
        this._url = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getFilms = () => {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => this._checkResponse(res))
        .catch((err) => console.log(err));
    }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies')

export default moviesApi;