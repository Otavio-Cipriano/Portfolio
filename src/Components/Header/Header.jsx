import style from './Header.module.scss'

import Sidebar from '../Sidebar/Sidebar'

import { Link } from 'react-scroll'


export default function Header({...props}) {
    return (
        <div className={style.container} {...props}>
            <div className={style.wrap}>
                <div className={style.hero}>
                    <h2>
                        Hello
                        <br />
                        I{"\'"}m Otavio Cipriano<br />
                        A Web Developer
                    </h2>
                    <p>
                        I build digital experiences for  Web Applications<br />
                        so that a user can see and interact with them directly.
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
