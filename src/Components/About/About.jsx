import style from './About.module.scss'

import Link from '../Link/Link'
import IconContainer from '../IconContainer/IconContainer'
import TitleSection from '../TitleSection/TitleSection'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Technologies from '../Technologies/Technologies'

import Information from '../../misc/information'

export default function About({...props}) {
    return (
        <div className={style.container} {...props}>
            <TitleSection>If you{"\'"}re curious about me</TitleSection>
            <div className={style.divisor}>
                <div className={style.imageContainer}>
                    <Information/>
                </div>
                <div className={style.textContainer}>
                    <h3>Who am I ?</h3>
                    <p>{"I\'m Otávio Cipriano "} 
                        a Full Stack Web Developer Based in Brazil
                        <br />
                        <br />
                        I build modern websites and comercial grade <br /> 
                        aplications for web
                        using the latest technological trends. 
                        <br/>
                        <br/>
                        I started to enjoy coding around 2019 and since then I am studying 
                        and developing applications for web.
                        <br/>
                        <br/>
                        Currently living in São Paulo, Brazil
                    </p>
                    <h3>Want to Contact me ?</h3>
                    <div className={style.contactLinks}>
                    <a href="https://github.com/Otavio-Cipriano"  target="_blank" rel="noreferrer"><IconContainer icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/otavio-felipe-cipriano/"  target="_blank" rel="noreferrer"><IconContainer icon={faLinkedin}/></a>
                    <a href="https://twitter.com/OtavioDv"  target="_blank" rel="noreferrer"><IconContainer icon={faTwitter}/></a>
                    </div>
                </div>
            </div>
            <Technologies/>
        </div>
    )
}
