import Link from 'next/link'
import style from './Sidebar.module.scss'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import IconContainer from '../IconContainer/IconContainer'


export default function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <a href="https://github.com/Otavio-Cipriano" target="_blank">
                    <IconContainer icon={faGithub} />
                </a>
            </div>
            <div className={style.icon}>
                <a href="https://www.linkedin.com/in/otavio-felipe-cipriano/" target="_blank">
                    <IconContainer icon={faLinkedin} />
                </a>
            </div>
            <div className={style.icon}>
                <a href="https://twitter.com/OtavioDv" target="_blank">
                    <IconContainer icon={faTwitter} />
                </a>
            </div>
        </div >
    )
}
