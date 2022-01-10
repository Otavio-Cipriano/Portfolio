import TitleSection from '../TitleSection/TitleSection'
import style from './Contact.module.scss'

export default function Contact({...props}) {
    return (
        <div className={style.container} {...props}>
            <TitleSection>How about leave a message</TitleSection>
            <div className={style.formContainer}>
                <form action="">
                    <div className={style.input}>
                        <label className={style.input__label}>Name:</label>
                        <input type="text" name="name" className={style.input__field} placeholder="Enter your Name"/>
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Email:</label>
                        <input type="email" name="email" className={style.input__field} placeholder="Enter your Name"/>
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Message:</label>
                       <textarea className={style.input__area} name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}
