import styles from './styles.module.scss'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.wrap}>
                <div className={styles.headerInfo}>
                    <p>Hi, I'm <strong>Otávio Cipriano</strong><br/> A <strong>Web devloper</strong></p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    )
}
