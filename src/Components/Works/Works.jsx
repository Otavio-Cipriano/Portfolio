import WorksCard from '../WorksCard/WorksCard'
import TitleSection from '../TitleSection/TitleSection'

import { Projects } from './data'

import { useState } from 'react'
import ElementOnScreenAnimation from '../ElementOnScreenAnimation/ElementOnScreenAnimation'

export default function Works({ ...props }) {

    return (
        <div className='works' {...props}>
            <ElementOnScreenAnimation animation={'fadeInLeft'}>
                <TitleSection > A few things I{"\'"}ve Built...</TitleSection>
                <div className='works__grid'>
                    {Projects.length > 0 ?
                        Projects.map((project, index) => {
                            return (<WorksCard key={index} work={project} />)
                        })
                        : <em>Nothig here yet</em>
                    }
                </div>
            </ElementOnScreenAnimation>
        </div>
    )
}
