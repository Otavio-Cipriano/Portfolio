import IconContainer from '../IconContainer/IconContainer'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function Technologies() {
    return (
        <div className='techologies'>
            <h2>Some Technologies I Use</h2>
            <div className='technologies__row'>
                <div>
                    <span><IconContainer icon={faReact}/></span>
                    <h3>Front-End</h3>
                    <p>Experience with like ReactJs and NextJs </p>
                </div>
                <div>
                    <span><IconContainer icon={faDatabase}/></span>
                    <h3>Back-End</h3>
                    <p>
                        Experience with NodeJs and Databases
                    </p>
                </div>
                <div>
                    <span><IconContainer icon={faSitemap}/></span>
                    <h3>UI/UX</h3>
                    <p>
                        Experience with tools like Figma
                    </p>
                </div>
            </div>
        </div>
    )
}
