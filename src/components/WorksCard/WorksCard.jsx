import Link from 'next/link'
import IconContainer from '../IconContainer/IconContainer'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function WorksCard({ work }) {
    return (
        <div className='workcard'>
            <div className='workcard__cover'>
                <img src={work.cover_image} alt="project's screenshot" />
            </div>
            <div className='workcard__text'>
                <h2>{work.title.substr(0, 72)}</h2>
                <div className='workcard__tags'>
                    {
                        work.tags.map((tag, idx) => {
                            return (
                                <span key={idx}>{tag}</span>
                            )
                        })
                    }
                </div>
                <p>
                    {work.desc.substr(0, 200)}
                </p>
                <div className='workcard__links'>
                    <a href={work.code} target="_blank" rel="noreferrer">
                        <p>Code</p>
                        <IconContainer icon={faGithub} />
                    </a>
                    <a href={work.live} target="_blank" rel="noreferrer">
                        <p>Live</p>
                        <IconContainer icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </div>
    )
}
