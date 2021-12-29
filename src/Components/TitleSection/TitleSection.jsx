export default function TitleSection({ children }) {
    return (
        <div style={container}>
            <h2 style={title}>
                {children}
            </h2>
            <div style={dash}></div>
        </div>
    )
}


const container = {
    position: 'relative',
    margin: '5rem 0',
}

const title = {
    fontSize: '2.5rem',
    textAlign: 'center',
    margin: '10px 0',
}

const dash = {
    position: 'absolute',
    width: '150px',
    height: '10px',
    backgroundColor: 'white',
    bottom: '-1rem',
    left: '45%',
    opacity: '70%',
    borderRadius: '2px'
}