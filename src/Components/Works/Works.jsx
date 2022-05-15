import WorksCard from '../WorksCard/WorksCard'
import TitleSection from '../TitleSection/TitleSection'


import style from './Works.module.scss'

import { Projects } from './data'

import useElementOnScreen from '../../hooks/useElementOnScreen'
import { useState } from 'react'

export default function Works({...props}) {
    const [visible, setVisible] = useState(false)

    const cb = (entries) => {
        if (entries[0].isIntersecting) {
            setVisible(true)
        }
    }

    const { containerRef } = useElementOnScreen(cb, {root: null, treeshold: 1.0})

    return (
        <div  className={`${style.container} ${style.fadeInLeft}`} {...props}>
            <TitleSection ><div ref={containerRef}/> A few things I{"\'"}ve Built...</TitleSection>
            <div  className={style.grid}>
                {Projects.length > 0 ?
                    Projects.map((project, index)=>{
                        return(<WorksCard key={index} work={project}/>)
                    })
                    : <em>Nothig here yet</em>
                }
            </div>
        </div>
    )
}
