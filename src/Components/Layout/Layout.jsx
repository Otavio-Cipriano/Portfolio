import style from './Layout.module.scss'

import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Navbar />
            <Container>
                {children}
            </Container>
        </div>
    )
}
