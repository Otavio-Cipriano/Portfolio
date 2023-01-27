import IconContainer from '../IconContainer/IconContainer'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function Technologies() {
    return (
        <div className='techologies'>
            <h2 style={{textAlign: 'center'}}>Some Technologies I Use</h2>
            <div className='technologies__row'>
                <div>
                    <span><IconContainer icon={faReact}/></span>
                    <h3>Front-End</h3>
                    <p>Experience with HTML, CSS, Sass, Styled-Components
                        Javascript, ReactJs, and Nextjs</p>
                </div>
                <div>
                    <span><IconContainer icon={faDatabase}/></span>
                    <h3>Back-End</h3>
                    <p>
                        Experience with NodeJs and Databases as 
                        Oracle, SQLServer and MongoDB
                    </p>
                </div>
                <div>
                    <span><IconContainer icon={faSitemap}/></span>
                    <h3>UI/UX</h3>
                    <p>
                        Experience with tools like Figma 
                        and Photoshop
                    </p>
                </div>
            </div>
        </div>
    )
}
