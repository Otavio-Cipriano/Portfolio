import emailJs from '@emailjs/browser'
import { useRef } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import style from './Contact.module.scss'
import { ToastContainer, toast } from 'react-toastify';


export default function Contact({...props}) {
    const fields = ['name', 'email', 'message'];
    const form = useRef();

    const sendEmail = () => {

    }

    const handleOnClick = (e) =>{
        e.preventDefault()
        // sendEmail()
        // e.target.reset()
        // if(!validateForm){
        //     toast.warn("Message couldn't be sent", {theme: "dark"})
        // }
        console.log(validateForm(form.current), form.current['name'].classList)
    }

    const validateForm = (form) =>{
        let validatedFields = fields.map((field, index)=>{
            if(form[`${field}`].value < 1){
                form[`${field}`].classList.add(style.field__error)
                return false
            }
            return true
        })
    
        if(validatedFields.includes(false)) return false

        return true
    }

    const onFieldFocus = (e) =>{
       if(e.target.classList.length > 1){
           e.target.classList.toggle(`${e.target.classList[1]}`)
           console.log(e.target.classList)
       }
    }


    return (
        <div className={style.container} {...props}>
            <TitleSection>How about leave a message</TitleSection>
            <div className={style.formContainer}>
                <form onSubmit={handleOnClick} ref={form}>
                    <div className={style.input}>
                        <label className={style.input__label} >Name:</label>
                        <input 
                        type="text" 
                        name="name" 
                        className={style.input__field} 
                        placeholder="Enter your Name"
                        minLength={2}
                        maxLength={100}
                        onFocus={onFieldFocus}/>
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Email:</label>
                        <input 
                        type="email" name="email" 
                        className={style.input__field} 
                        placeholder="Enter your Name"
                        minLength={2}
                        maxLength={100}
                        onFocus={onFieldFocus}/>
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Message:</label>
                       <textarea 
                       className={style.input__area} 
                       name="message" cols="30" rows="10" 
                       placeholder="Enter your message"
                       onFocus={onFieldFocus}></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
            <ToastContainer className={style.toast}/>
        </div>
    )
}


