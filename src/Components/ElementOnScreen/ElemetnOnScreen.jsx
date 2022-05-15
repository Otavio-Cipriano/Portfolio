import useElementOnScreen from '../../hooks/useElementOnScreen'

export default function ElementOnScreenAnimation({duration, type, options, children, ...props}) {
    const { containerRef } = useElementOnScreen()

    return (
        <div  {...props}>{children}</div>
    )
}


const animations = {
    fromRight: {
        transform: 'translateX(-100%)',
        opacity: 0
    },
    fromLeft: {},
    fromTop: {},
    fromBottom: {},
    opacity: {}
}