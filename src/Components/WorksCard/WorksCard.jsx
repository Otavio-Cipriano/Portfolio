import Link from 'next/link'
import style from './WorksCard.module.scss'

export default function WorksCard() {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src="https://picsum.photos/1000/1000" alt="project's screenshot" />
            </div>
            <div className={style.textContainer}>
                <h2>Some Project</h2>
                <div>
                    <span>tag</span>
                    <span>tag</span>
                    <span>tag</span>
                </div>
                <p>Nostrud ullamco ut nostrud nisi cupidatat sunt. 
                    Veniam sunt elit fugiat aute aliqua minim laboris 
                    elit nisi ipsum.
                </p>
                <div className={style.linksContainer}>
                    <Link href="https://github.com/" passHref={true}>
                        <a>
                            <div className={style.icon}>
                                <img src="/icons/github.svg" alt="icon for github link" />
                            </div>
                        </a>
                    </Link>
                    <Link href="https://github.com/" passHref={true}>
                        <a>
                            <div className={style.icon} >
                                <img src="/icons/outside-link.svg" alt="icon for live version link" />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
