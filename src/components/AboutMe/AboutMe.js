import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <h3 className='about-me__header'>Студент</h3>
            <div className='about-me__photo'/>
            <h2 className='about-me__title'>Евгений</h2>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 26 лет</h4>
            <p className='about-me__text'>
            Я родился и живу в г.Дзержинск. Закончил Архитектурно-строительный университет по направлению "Стандартизация и метрология" 
            и Политехнический университет по направлению "Автоматизация производства".
            Я люблю слушать музыку, а ещё увлекаюсь волейболом. Недавно начал кодить.
            После того, как прошёл курс по веб-разработке, сменил работу и стремлюсь развиваться в новой для себя сфере.
            </p>
            <div className='about-me__links'>
                <a href="https://www.facebook.com/" className='about-me__link'>Facebook</a>
                <a href="https://github.com/PlehanovEvgeniy" className='about-me__link'>Github</a>
            </div>
        </section>
    )
}

export default AboutMe;