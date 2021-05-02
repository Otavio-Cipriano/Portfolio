import styles from './styles.module.scss';
import {FaExternalLinkSquareAlt, FaGithub} from 'react-icons/fa'

export default function Card({image, title, description, livelink, githublink}) {
    return (
        <div className={styles.cardContainer} >
            <div className={styles.imageContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.detailsContainer}>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <a href=""><FaExternalLinkSquareAlt/></a>
                    <a href=""><FaGithub/></a>
                </div>
            </div>
        </div>
    )
}
