import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import IconContainer from '../IconContainer/IconContainer'
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
        <nav className={`nav ${background ? 'nav__black' : ''}`}>
            <div className='nav__wrap'>
                <div className='nav__logo'><Link to="header" smooth><h1>OC</h1></Link></div>
                <ul className={`nav__links ${!menu ? 'nav__hide' : 'nav__show'}`} >
                    <li className='nav__link'>
                        <Link to="works" smooth>Works</Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="aboutme" smooth>About me</Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="contact" smooth>Contact</Link>
                    </li>
                    <li>
                        <a href="../../data/something.pdf" download>
                            <button>Resume</button>
                        </a>
                    </li>
                </ul>
                <div className='nav__btn' onClick={() => setMenu(!menu)}>
                    {menu ?
                        <IconContainer icon={faTimes} /> :
                        <IconContainer icon={faBars} />}
                </div>
            </div>
        </nav>
    )
}
