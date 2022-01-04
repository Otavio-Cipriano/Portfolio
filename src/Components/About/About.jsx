import style from './About.module.scss'

export default function About() {
    return (
        <div className={style.container}>
            <h2>If you{"\'"}re curious about me</h2>
            <div className={style.divisor}>
                <div className={style.imageContainer}>
                    <object data="/images/information.svg" type=""></object>
                </div>
                <div>
                    <h3>Who am I ?</h3>
                    <h4>{"I\'m Otávio Cipriano"} <br />
                        A Full Stack Web Developer Based in Brazil
                    </h4>
                    <p>
                        Im a web developer that builds websites and comercial grade aplications for web
                        using the latest technological trends. Currentrly living in São Paulo, Brazil
                    </p>
                </div>
            </div>
        </div>
    )
}
