import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import IconContainer from '../IconContainer/IconContainer'

import style from './Navbar.module.scss'

import { Link } from 'react-scroll'

export default function Navbar() {
    const [background, setBackground] = useState(false)
    const [menu, setMenu] = useState(false)
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
                <div className={`${style.navLinks} ${!menu ? style.hide : style.show}`} >
                    <div className={style.navLink}>
                        <Link to="works" smooth>Works</Link>
                    </div>
                    <div className={style.navLink}>
                        <Link to="aboutme" smooth>About me</Link>
                    </div>
                    <div className={style.navLink}>
                        <Link href="/Contact">Contact</Link>
                    </div>
                    <div className={style.resumeBtn}>
                        <a href="../../data/something.pdf" download>
                            <button>Resume</button>
                        </a>
                    </div>
                </div>
                <div className={style.menuBtn} onClick={() => setMenu(!menu)}>
                    {menu ?
                        <IconContainer icon={faTimes} /> :
                        <IconContainer icon={faBars} />}
                </div>
            </div>
        </div>
    )
}
