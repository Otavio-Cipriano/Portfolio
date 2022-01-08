import WorksCard from '../WorksCard/WorksCard'
import TitleSection from '../TitleSection/TitleSection'


import style from './Works.module.scss'

const Projects = [
    {
        title: 'Some Project Title'
    }
]

export default function Works() {
    return (
        <div className={style.container}>
            <TitleSection>A few things I{"\'"}ve Built...</TitleSection>
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