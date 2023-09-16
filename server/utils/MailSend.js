const nodeMailer = require("nodemailer");

const mailSender = async(subject,emailTemplate,receiver) => { 
    try {
        const transporter = nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
             auth:{
             pass:process.env.MAIL_PASS,
             user:process.env.MAIL_USER
           }
        });
        const result = await transporter.sendMail({
            from:"Akash",
            to:receiver,
            subject:subject,
            html:emailTemplate
        })
        console.log(result)
        return result;
    }catch(error){
         console.log("error while sending mail",error)
    }
}

module.exports = mailSender
