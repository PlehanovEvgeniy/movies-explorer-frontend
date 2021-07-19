import './Profile.css'
import {useContext, useEffect, useState} from "react";
import ValidationForm from "../../hooks/validationForm";
import { CurrentUserContext } from "../../context/currentUserContext";
import Preloader from "../Preloader/Preloader";

const Profile = ({onLogout, onEditProfile, isLoading, errorResponse}) => {
    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isValid, handleChange } = ValidationForm({ email: currentUser.email, name: currentUser.name });

    const [isValuesNotMatched, setIsValuesNotMatched] = useState(false);

    function checkValues() {
        if (currentUser.email === values.email && currentUser.name === values.name) {
            setIsValuesNotMatched(false);
        } else {
            setIsValuesNotMatched(true);
        }
    }

    useEffect(() => {
        checkValues();
    }, [handleChange]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onEditProfile(values.name, values.email);
    }

    return (
    <section className='profile'>
        <div className='profile__container'>
            <h3 className='profile__name'>Привет, Евгений!</h3>
            {isLoading === true ? <Preloader/> :
                <form className="profile__info">
                    <div className='profile__info-fields'>
                        <div className='profile__info-container'>
                            <p className="profile__info-label">Имя</p>
                            <input
                                name="name"
                                type="text"
                                required
                                value={values.name || ""}
                                onChange={handleChange}
                                className="profile__info-field"
                                placeholder="Введите имя"/>
                        </div>
                        <span className="profile__info-error">{errors.name}</span>

                        <div className="profile__info-container">
                            <p className="profile__info-label">E-mail</p>
                            <input
                                name="email"
                                type="email"
                                required
                                value={values.email || ""}
                                onChange={handleChange}
                                className="profile__info-field"
                                placeholder="Укажите почту"/>
                        </div>
                        <span className="profile__info-error">{errors.email}</span>
                    </div>

                    <div className="profile__info-buttons">
                        <span className="profile__info-error">{errorResponse}</span>
                        <button
                            type="submit"
                            className={
                                isValid && isValuesNotMatched
                                    ? "profile__info-button"
                                    : "profile__info-button profile__info-button_disable"
                            }
                            onClick={handleOnSubmit}
                            disabled={!isValid && !isValuesNotMatched}
                        >
                            {isValid && isValuesNotMatched
                                ? "Сохранить"
                                : "Редактировать"}
                        </button>
                        <button type="button" className="profile__info-button" onClick={onLogout}>Выйти из аккаунта
                        </button>
                    </div>
                </form>
            }
        </div>
    </section>
    )
}

export default Profile;
