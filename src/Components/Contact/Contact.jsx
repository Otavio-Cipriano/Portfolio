import emailJs from '@emailjs/browser'
import { useRef, useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import style from './Contact.module.scss'
import { ToastContainer, toast } from 'react-toastify';


export default function Contact({ ...props }) {
    const [invalidFields, setInvalidFields] = useState([])
    const fields = ['name', 'email', 'message'];
    const form = useRef();


    const handleOnClick = (e) => {
        e.preventDefault()
        if (validateForm(form.current)) { 
            sendEmail(); 
            e.target.reset()
        }
        else { 
            toast.error("Message couldn't be sent", { theme: "dark" })
            console.log(invalidFields) 
        }
    }

    const validateForm = (form) => {
        let validatedFields = fields.map((field, index) => {
            if (form[`${field}`].value < 1) {
                form[`${field}`].classList.add(style.field__error)
                return false
            }
            return true
        })
        setInvalidFields(fields.map((value, index) =>{
            if(validatedFields[index] === false){
                return value
            }
        }))

        if (validatedFields.includes(false)) {
            return false
        }

        return true
    }

    
    const sendEmail = () => {
        emailJs
            .sendForm('gmail', 'pfolio_template', form.current, 'user_7xfUprucPZmaTlOxYBZX0')
            .then((result) => {
                console.log(result.status);
                toast.success("Messge sent with success!", { theme: "dark" })
            }, (error) => {
                console.log(error)
                toast.error("Message couldn't be sent", { theme: "dark" })
            })
    }

    const onInput = (e) => {
        if (e.target.classList.length > 1 && e.target.value) {
            e.target.classList.toggle(`${e.target.classList[1]}`)
            setInvalidFields(invalidFields.filter(element => element != e.target.name))
        }
    }


    return (
        <div className={style.container} {...props}>
            <TitleSection>How about leave a message</TitleSection>
            <div className={style.formContainer}>
                <form onSubmit={handleOnClick} ref={form}>
                    <div className={style.input}>
                        <label className={style.input__label} >Name:</label>
                        <span 
                        style={invalidFields.includes('name') ? {display: 'block'} : {display: 'none'}}>
                            You need to enter a name
                        </span>
                        <input
                            type="text"
                            name="name"
                            className={style.input__field}
                            placeholder="Enter your Name"
                            minLength={2}
                            maxLength={100}
                            onInput={onInput}/>
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Email:</label>
                        <span 
                        style={invalidFields.includes('email') ? {display: 'block'} : {display: 'none'}}>
                            You need to enter a email
                        </span>
                        <input
                            type="email" name="email"
                            className={style.input__field}
                            placeholder="Enter your Name"
                            minLength={2}
                            maxLength={100}
                            onInput={onInput} />
                    </div>
                    <div className={style.input}>
                        <label className={style.input__label}>Message:</label>
                        <span 
                        style={invalidFields.includes('message') ? {display: 'block'} : {display: 'none'}}>
                            You need to enter a message
                        </span>
                        <textarea
                            className={style.input__area}
                            name="message" cols="30" rows="10"
                            placeholder="Enter your message"
                            onInput={onInput}
                            ></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
            <ToastContainer className={style.toast} />
        </div>
    )
}
