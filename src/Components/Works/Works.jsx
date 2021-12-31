import WorksCard from '../WorksCard/WorksCard'
import style from './Works.module.scss'

export default function Works() {
    return (
        <div className={style.container}>
            <h2>A few things Ive Built...</h2>
            <div className={style.grid}>
                <WorksCard/>
                <WorksCard/>
                <WorksCard/>
                <WorksCard/>
            </div>
        </div>
    )
}


'https://picsum.photos/200/300'