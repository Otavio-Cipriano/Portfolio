import IconContainer from '../IconContainer/IconContainer'
import TitleSection from '../TitleSection/TitleSection'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Technologies from '../Technologies/Technologies'

import Information from '../../misc/Information'
import ElementOnScreenAnimation from '../ElementOnScreenAnimation/ElementOnScreenAnimation'

export default function About({ ...props }) {
    return (
        <div className='about'{...props}>
            <ElementOnScreenAnimation animation='fadeInRight'>
                <TitleSection>If you{"\'"}re curious about me</TitleSection>
                <div className='about__divisor'>
                    <div className='about__image'>
                        <Information />
                    </div>
                    <div className='about__text'>
                        <h3>Who am I ?</h3>
                        <p></p>
                        <p>I&apos;m Otávio Cipriano 
                            a Full Stack Web Developer Based in Brazil
                            </p>
                            <p>
                            I build modern websites and comercial grade
                            aplications for web
                            using the latest technological trends as like Javascript, 
                            Typescript, Reactjs, Nextjs, Styled-Components and Sass.
                            </p>
                            <p>
                            I started to enjoy coding around 2019 and since then I am studying
                            and developing applications for web.
                            </p>
                            <p>
                            Currently living in São Paulo, Brazil
                        </p>
                        <h3>Want to Contact or Give me a feedback ?</h3>
                        <div className='about__links'>
                            <a href="https://github.com/Otavio-Cipriano" target="_blank" rel="noreferrer"><IconContainer icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/otaviocipriano/" target="_blank" rel="noreferrer"><IconContainer icon={faLinkedin} /></a>
                            <a href="https://twitter.com/OtavioDv" target="_blank" rel="noreferrer"><IconContainer icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
                <Technologies />
            </ElementOnScreenAnimation>
        </div>
    )
}
