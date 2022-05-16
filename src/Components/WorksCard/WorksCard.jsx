import Link from 'next/link'
import IconContainer from '../IconContainer/IconContainer'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function WorksCard({work}) {
    return (
        <div className='workcard'>
            <div className='workcard__cover'>
                <img src="https://picsum.photos/1000/1000" alt="project's screenshot" />
            </div>
            <div className='workcard__text'>
                <h2>{work.title.substr(0,72)}</h2>
                <div className='workcard__tags'>
                    <span>JavaScript</span>
                    <span>ReactJS</span>
                    <span>NodeJs</span>
                </div>
                <p>
                    {work.desc.substr(0,200)}
                </p>
                <div className='workcard__links'>
                    <Link href="https://github.com/" passHref={true}>
                        <a>
                            <p>Code</p>
                            <IconContainer icon={faGithub} />
                        </a>
                    </Link>
                    <Link href="https://github.com/" passHref={true}>
                        <a>
                            <p>Live</p>
                            <IconContainer icon={faExternalLinkAlt} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
