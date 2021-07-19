import './AboutProject.css';

const AboutProject = () => {
    return(
        <section className="aboutProject"  id="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <div className="aboutProject__container">
                <article className="aboutProject__paragraph">
                    <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__text">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </article>
                <article className="aboutProject__paragraph">
                    <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__text">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </article>
            </div>
            <ul className="aboutProject__timetable">
                <li className="aboutProject__timetable_backend">
                    <p className="aboutProject__timetable_time aboutProject__timetable_time-first">1 неделя</p>
                    <p className="aboutProject__timetable_description">Back-end</p>
                </li>
                <li className="aboutProject__timetable_frontend">
                    <p className="aboutProject__timetable_time">4 недели</p>
                    <p className="aboutProject__timetable_description">Front-End</p>
                </li>
            </ul>
        </section>

    )
}

export default AboutProject;
