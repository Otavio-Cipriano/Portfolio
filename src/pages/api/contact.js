// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailJs from '@emailjs/browser'


export default function handler(req, res) {
  if(req.method === 'GET' && req.body != ''){
    res.status(200).json('Nice Dude')
  }

  res.status(400).json('Fuck off')
}

const sendEmail = (form) => {
  emailJs
    .sendForm(process.env.CLIENT_ID, process.env.TEMPLATE_ID, form, process.env.USER_ID)
    .then((result) => {
      console.log(result.status);
    }, (error) => {
      console.log(error)
    })
}