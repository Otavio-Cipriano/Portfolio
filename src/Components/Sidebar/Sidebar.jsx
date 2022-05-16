import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import IconContainer from '../IconContainer/IconContainer'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__icon'>
                <a href="https://github.com/Otavio-Cipriano" target="_blank" rel="noreferrer">
                    <IconContainer icon={faGithub} />
                </a>
            </div>
            <div className='sidebar__icon'>
                <a href="https://www.linkedin.com/in/otavio-felipe-cipriano/" target="_blank" rel="noreferrer">
                    <IconContainer icon={faLinkedin} />
                </a>
            </div>
            <div className='sidebar__icon'>
                <a href="https://twitter.com/OtavioDv" target="_blank" rel="noreferrer">
                    <IconContainer icon={faTwitter} />
                </a>
            </div>
        </div >
    )
}
