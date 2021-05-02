import Header from './Header'
import styles from './styles.module.scss'
import Works from './Works'

export default function Main() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <Works/>
        </div>
    )
}
