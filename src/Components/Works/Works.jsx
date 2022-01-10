import WorksCard from '../WorksCard/WorksCard'
import TitleSection from '../TitleSection/TitleSection'


import style from './Works.module.scss'

const Projects = [
    // {
    //     title: 'Id minim aliquip do consequat cillum eiusmod dolor cillum eiusmod dolor ',
    //     tags: ['Javascript', 'AAAA'],
    //     desc: `Laboris velit tempor duis esse do aliqua. 
    //     Mollit nostrud tempor id fugiat duis nostrud fugiat 
    //     occaecat labore labore excepteur quis voluptate. Culpa 
    //     quis eiusmod velit aliqua veniam adipisicing anim non. 
    //     Id minim aliquip do consequat cillum eiusmod dolor 
    //     `,
    //     code: 'https://github.com/',
    //     live: 'https://github.com/',
    //     cover_image: 'https://i.picsum.photos/id/292/1000/1000'
    // }
]

export default function Works({...props}) {
    return (
        <div className={style.container} {...props}>
            <TitleSection>A few things I{"\'"}ve Built...</TitleSection>
            <div className={style.grid}>
                {Projects.length > 0 ?
                    Projects.map((project, index)=>{
                        return(<WorksCard work={project}/>)
                    })
                    : <em>Nothig here yet</em>
                }
            </div>
        </div>
    )
}


'https://picsum.photos/200/300'