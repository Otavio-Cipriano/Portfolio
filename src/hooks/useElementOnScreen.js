import { useRef, useEffect } from "react"

export default function useElementOnScreen(cb, options){
    const containerRef = useRef(null)

    useEffect(()=>{
        let observerRefValue = null;

        const observer = new IntersectionObserver(cb, options)

        if(containerRef.current){
            observer.observe(containerRef.current)
            observerRefValue = containerRef.current
        }

        return () => { //unmounting observer 
            if(observerRefValue) observer.unobserve(observerRefValue)
        }
        
    },[containerRef, cb, options])

    return {containerRef}
}