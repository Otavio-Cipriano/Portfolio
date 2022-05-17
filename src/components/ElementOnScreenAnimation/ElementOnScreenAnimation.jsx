import {useState} from 'react'
import useElementOnScreen from '../../hooks/useElementOnScreen'

export default function ElementOnScreenAnimation({animation, children}) {
    const [ visible, setVisible ] = useState(false)
    const elementOnScreen = (entries) =>{
        if(entries[0].isIntersecting){
            setVisible(() => true)
        }else{
            setVisible(() => false)
        }
    }

    const { containerRef } = useElementOnScreen(elementOnScreen, {})

    return (
        <div ref={containerRef} className={visible ? `${animation}` : ''}>{children}</div>
    )
}
