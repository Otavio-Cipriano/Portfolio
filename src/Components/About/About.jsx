import style from './About.module.scss'

import Link from '../Link/Link'
import IconContainer from '../IconContainer/IconContainer'
import TitleSection from '../TitleSection/TitleSection'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Technologies from '../Technologies/Technologies'

export default function About({...props}) {
    return (
        <div className={style.container} {...props}>
            <TitleSection>If you{"\'"}re curious about me</TitleSection>
            <div className={style.divisor}>
                <div className={style.imageContainer}>
                    <object data="/images/information.svg" type=""></object>
                </div>
                <div className={style.textContainer}>
                    <h3>Who am I ?</h3>
                    <p>{"I\'m Otávio Cipriano"} <br />
                        A Full Stack Web Developer Based in Brazil
                        <br />
                        <br />
                        I build modern websites and comercial grade <br /> 
                        aplications for web
                        using the latest technological trends. 
                        <br/>
                        <br/>
                        Currently living in São Paulo, Brazil
                    </p>
                    <h3>Want to Contact me ?</h3>
                    <div className={style.contactLinks}>
                    <a href="https://github.com/Otavio-Cipriano"  target="_blank"><IconContainer icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/otavio-felipe-cipriano/"  target="_blank"><IconContainer icon={faLinkedin}/></a>
                    <a href="https://twitter.com/OtavioDv"  target="_blank"><IconContainer icon={faTwitter}/></a>
                    </div>
                </div>
            </div>
            <Technologies/>
        </div>
    )
}
