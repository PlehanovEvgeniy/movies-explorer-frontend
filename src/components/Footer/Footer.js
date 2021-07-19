import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__bottom-bar'>
                <p className='footer__copyright'>© 2021</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://praktikum.yandex.ru'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com'>Github</a>
                    <a className='footer__link' href='https://facebook.com/'>Facebook</a>
                </div>
            </div>       
        </footer>
    )
}

export default Footer;