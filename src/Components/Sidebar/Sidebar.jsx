import Link from 'next/link'
import style from './Sidebar.module.scss'

export default function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Link href="https://github.com/Otavio-Cipriano" passHref={true}>
                    <a>
                        <img
                            src="/icons/github.svg"
                            alt="github's icon" />
                    </a>
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.linkedin.com/in/otavio-felipe-cipriano/" passHref={true}>
                    <a>
                        <img
                            src="/icons/linkedin.svg"
                            alt="linkedin's icon" />
                    </a>
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.twitter.com/" passHref={true}>
                    <a>
                        <img
                            src="/icons/twitter.svg"
                            alt="twitter's icon" />
                    </a>
                </Link>
            </div>
        </div >
    )
}
