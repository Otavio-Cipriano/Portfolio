import style from './Technologies.module.scss'

import IconContainer from '../IconContainer/IconContainer'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faSitemap } from '@fortawesome/free-solid-svg-icons'

export default function Technologies() {
    return (
        <div className={style.container}>
            <h2>some technologies i use</h2>
            <div className={style.row}>
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
