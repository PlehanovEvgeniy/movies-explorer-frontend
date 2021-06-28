import './Techs.css'

const Techs = () => {
    return (
        <section className='techs'>
            <div className='techs__content'>
                <h3 className='techs__header-text'>Технологии</h3>
                <h2 className='techs__title'>7 технологий</h2>
                <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.</p>

                <div className='techs__stacks'>
                <div className='techs__stacks-element'>HTML</div>
                <div className='techs__stacks-element'>CSS</div>
                <div className='techs__stacks-element'>JS</div>
                <div className='techs__stacks-element'>React</div>
                <div className='techs__stacks-element'>Git</div>
                <div className='techs__stacks-element'>Express.js</div>
                <div className='techs__stacks-element'>mongoDB</div>
                </div>    
            </div>
        </section>
    )
}

export default Techs;