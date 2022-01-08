import style from './TitleSection.module.scss';

export default function TitleSection({ children }) {
    return (
        <div className={style.container}>
            <h2 style={style.title}>
                {children}
            </h2>
            <div className={style.dash}><div/></div>
        </div>
    )
}
