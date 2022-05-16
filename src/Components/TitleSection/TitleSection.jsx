import style from './TitleSection.module.scss';

export default function TitleSection({ children, ...props }) {
    return (
        <div className='title-section' {...props}>
            <h2>
                {children}
            </h2>
            <div className='title-section__dash'></div>
        </div>
    )
}
