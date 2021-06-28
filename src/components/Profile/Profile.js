import './Profile.css'

const Profile = () => {
    return (
    <section className='profile'>
        <div className='profile__container'>
            <h3 className='profile__name'>Привет, Евгений!</h3>
            <form className="profile__info">
                <div className='profile__info-fields'>
                    <div className='profile__info-container'>
                        <p className="profile__info-label">Имя</p>
                        <input className="profile__info-field" placeholder="Введите имя" />
                    </div>

                    <div className="profile__info-container">
                        <p className="profile__info-label">E-mail</p>
                        <input className="profile__info-field" placeholder="Укажите почту" />
                    </div>
                </div>

                <div className="profile__info-buttons">
                    <button type="submit" className="profile__info-button">Редактировать</button>
                    <button type="button" className="profile__info-button">Выйти из аккаунта</button>
                </div>
            </form>
            
        </div>
    </section>
    )
}

export default Profile;