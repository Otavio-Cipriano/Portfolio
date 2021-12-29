import Link from 'next/link'
import style from './Sidebar.module.scss'

export default function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Link  href="https://www.github.com/" passHref={true}>
                    <img
                        src="/icons/github.svg"
                        alt="github's icon" />
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.linkedin.com/" passHref={true}>
                    <img
                        src="/icons/linkedin.svg"
                        alt="linkedin's icon" />
                </Link>
            </div>
            <div className={style.icon}>
                <Link href="https://www.twitter.com/" passHref={true}>

                    <img
                        src="/icons/twitter.svg"
                        alt="twitter's icon" />
                </Link>
            </div>
        </div >
    )
}
