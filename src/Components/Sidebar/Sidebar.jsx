import Link from 'next/link'
import style from './Sidebar.module.scss'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import IconContainer from '../IconContainer/IconContainer'


export default function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Link href="https://github.com/Otavio-Cipriano" passHref={true}>
                    <a>
                        <IconContainer icon={faGithub}/>
                    </a>
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.linkedin.com/in/otavio-felipe-cipriano/" passHref={true}>
                    <a>
                        <IconContainer icon={faLinkedin}/>
                    </a>
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.twitter.com/" passHref={true}>
                    <a>
                        <IconContainer icon={faTwitter}/>
                    </a>
                </Link>
            </div>
        </div >
    )
}
