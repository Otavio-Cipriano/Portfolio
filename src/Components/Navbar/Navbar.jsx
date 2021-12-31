import { useEffect, useState } from 'react'
import Container from '../Container/Container'
import Link from '../Link/Link'
import style from './Navbar.module.scss'

export default function Navbar() {
    const [background, setBackground] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setBackground(true)
            } else {
                setBackground(false)
            }
        })
    }, [])
    return (
        <div className={`${style.navbar} ${background ? style.black : ''}`}>
            <div className={style.wrapper}>
                <div className={style.logoContainer}><a><h1>OC</h1></a></div>
                <div className={style.navLinks}>
                    <div className={style.navLink}>
                        <Link href="/Works">Works</Link>
                    </div>
                    <div className={style.navLink}>
                        <Link href="/About">About me</Link>
                    </div>
                    <div className={style.navLink}>
                        <Link href="/Contact">Contact</Link>
                    </div>
                    <div>
                        <button>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
