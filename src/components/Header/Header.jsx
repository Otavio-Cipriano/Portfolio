import Sidebar from '../Sidebar/Sidebar'

import { Link } from 'react-scroll'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import IconContainer from '../IconContainer/IconContainer'

export default function Header({ ...props }) {
    return (
        <div className='header' {...props}>
            <div className='header__wrap'>
                <div className='header__hero'>
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
            <div className='header__blacknail' />
        </div>
    )
}
