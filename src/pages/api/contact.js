// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailJs from '@emailjs/browser'


export default function handler(req, res) {
  if(req.method === 'GET' && req.body != ''){
    res.status(200).json('Nice Dude')
  }

  res.status(400).json('Fuck off')
}