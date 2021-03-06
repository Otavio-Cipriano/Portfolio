import { useRef, useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import { ToastContainer, toast } from 'react-toastify';
import ElementOnScreenAnimation from '../ElementOnScreenAnimation/ElementOnScreenAnimation';


export default function Contact({ ...props }) {
    const [invalidFields, setInvalidFields] = useState([])
    const fields = ['name', 'email', 'message'];
    const form = useRef();


    const handleOnClick = (e) => {
        e.preventDefault()
        if (validateForm(form.current)) {
            sendEmail(form.current.name.value,
                form.current.email.value,
                form.current.message.value);
            e.target.reset()
        }
        else {
            toast.error("Message couldn't be sent", { theme: "dark" })
        }
    }

    const validateForm = (form) => {
        let validatedFields = fields.map((field, index) => {
            if (form[`${field}`].value < 1) {
                form[`${field}`].classList.add('input__field-error')
                return false
            }
            return true
        })
        setInvalidFields(fields.map((value, index) => {
            if (validatedFields[index] === false) {
                return value
            }
        }))

        if (validatedFields.includes(false)) {
            return false
        }

        return true
    }


    const sendEmail = (name, email, message) => {
        fetch('/api/contact', {
            method: 'POST',
            mode: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        }).then((response) => {
            toast.success("Message sent with success", { theme: "dark" })
        }).catch((error) => {
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
        <div className='contact' {...props}>
            <ElementOnScreenAnimation animation='fadeInLeft'>
                <TitleSection>How about leave a message</TitleSection>
                <div className='contact__form'>
                    <form onSubmit={handleOnClick} ref={form}>
                        <div className='input'>
                            <label className='input__label' >Name:</label>
                            <span
                                style={invalidFields.includes('name') ? { display: 'block' } : { display: 'none' }}>
                                You need to enter a name
                            </span>
                            <input
                                type="text"
                                name="name"
                                className='input__field'
                                placeholder="Enter your Name"
                                minLength={2}
                                maxLength={100}
                                onInput={onInput} />
                        </div>
                        <div className='input'>
                            <label className='input__label'>Email:</label>
                            <span
                                style={invalidFields.includes('email') ? { display: 'block' } : { display: 'none' }}>
                                You need to enter a email
                            </span>
                            <input
                                type="email" name="email"
                                className='input__field'
                                placeholder="Enter your Name"
                                minLength={2}
                                maxLength={100}
                                onInput={onInput} />
                        </div>
                        <div className='input'>
                            <label className='input__label'>Message:</label>
                            <span
                                style={invalidFields.includes('message') ? { display: 'block' } : { display: 'none' }}>
                                You need to enter a message
                            </span>
                            <textarea
                                className='input__area'
                                name="message" cols="30" rows="10"
                                placeholder="Enter your message"
                                onInput={onInput}
                            ></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </ElementOnScreenAnimation>
            <ToastContainer className='contact__toast' />
        </div>
    )
}
