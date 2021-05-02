import logo from '../../images/Logo.png'
import styles from './styles.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.wrap}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo by otavio cipriano"/>
                </div>
                <div className={styles.navMenu}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Work</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
