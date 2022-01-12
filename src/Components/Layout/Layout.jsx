import style from './Layout.module.scss'

import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import IconContainer from '../IconContainer/IconContainer';
import Link from '../Link/Link'

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Navbar />
            <Container>
                {children}
            </Container>
            <footer>
                <p style={{ margin: '5px 0 0 0' }}>Contacts:</p>
                <div>
                    <a href="https://github.com/Otavio-Cipriano"  target="_blank" rel="noreferrer"><IconContainer icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/otavio-felipe-cipriano/" target="_blank" rel="noreferrer"><IconContainer icon={faLinkedin} /></a>
                    <a href="https://twitter.com/OtavioDv" target="_blank" rel="noreferrer"><IconContainer icon={faTwitter} /></a>
                </div>
                <p style={{ margin: '10px 0' }}>Copyright © 2022 - Otávio Cipriano</p>
            </footer>
        </div>
    )
}
