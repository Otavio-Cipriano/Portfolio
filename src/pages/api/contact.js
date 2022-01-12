const nodemailer = require('nodemailer')

export default function contact(req, res) {
    if (req.method === "POST") {
        if(!req.body) return res.status(400).send('is need a body');
        if(!req.body.name) return res.status(400).send('is need a name');
        if(!req.body.email) return res.status(400).send('is need a email');
        if(!req.body.message) return res.status(400).send('is need a message');

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.USEREMAIL,
                pass: process.env.PASSMAIL
            }
        })

        transporter.sendMail({
            from: `Pfolio ${process.env.USEREMAIL}`,
            to: process.env.USEREMAIL,
            replyTo: req.body.email,
            subject: "Pfolio contact",
            text: req.body.message,
            html: `
                <h1>${req.body.name}</h1><br/>
                <p>${req.body.message}</p>
            `
        }).then((result) => {
            res.status(200).send(result)
            console.log(result)
        }).catch((error) => { 
            res.status(400).send(error)
            console.log(error)
        })
    }
}