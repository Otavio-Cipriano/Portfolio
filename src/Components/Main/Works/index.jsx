import styles from './styles.module.scss'
import Card from '../../Card'

export default function Works() {
    return (
        <div className={styles.worksContainer}>
            <div className={styles.wrap}>
                <div className={styles.mainTitle}>
                    <h2>Works</h2>
                    <hr />
                </div>
                <div className={styles.works}>
                    <Card />
                </div>
            </div>
        </div>
    )
}
