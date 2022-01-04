import style from './Header.module.scss'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.hero}>
                <h2>
                    Hello
                    <br /> 
                    I{"\'"}m Otavio Cipriano<br/>
                    A Web Developer
                </h2>
                <p>
                    I build digital experiences for  Web Applications<br/>  
                    so that a user can see and interact with them directly.
                </p>
                <button>Get in Touch</button>
            </div>
            <div className={style.blacknail}>
            </div>
        </div>
    )
}
