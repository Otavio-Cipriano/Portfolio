import style from './Header.module.scss'

import Sidebar from '../Sidebar/Sidebar'

import { Link } from 'react-scroll'


export default function Header({...props}) {
    return (
        <div className={style.container} {...props}>
            <div className={style.wrap}>
                <div className={style.hero}>
                    <h1>
                        Hello
                        <br />
                        I{"\'"}m Otavio Cipriano<br />
                        A Web Developer
                    </h1>
                    <p>
                    I build modern digital experiences for Web Applications,
                    So that a user can view and interact in the most comfortable way possible
                    </p>
                    <Link to="contact" smooth>
                        <button>Get in Touch</button>
                    </Link>
                </div>
                <Sidebar />
            </div>
            <div className={style.blacknail}>
            </div>
        </div>
    )
}
