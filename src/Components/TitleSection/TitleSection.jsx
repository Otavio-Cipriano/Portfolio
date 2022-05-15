import style from './TitleSection.module.scss';

export default function TitleSection({ children, ...props }) {
    return (
        <div className={style.container} {...props}>
            <h2 style={style.title}>
                {children}
            </h2>
            <div className={style.dash}></div>
        </div>
    )
}
