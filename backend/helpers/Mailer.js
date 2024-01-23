import * as nodemailer from 'nodemailer'

const config = {
    service: 'gmail',
    host: 'stmp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.SOURCE_EMAIL,
      pass: process.env.SOURCE_PASSWORD
    },
  }



const sendEmail = async (to,token)=>{
    
    let transporter =  nodemailer.createTransport(config)
    
    const mail= await transporter.sendMail({
        from:process.env.SOURCE_EMAIL,
        to,
        subject:"Affiliate Activation Email",
        text:`Your account has been activated successfully!Your secure token is:${token}`,
        html:`<p>Your account has been activated successfully!</p><p>Your token is: <b>${token}</b></p>`
        
    }) 
    
    // const mail= await transporter.sendMail({
    //     from:process.env.SOURCE_EMAIL,
    //     to,
    //     subject:"Affiliate Activation Email",
    //     text:"Your account has been activated successfully!Your token is",
    //     html:"<p>Your account has been activated successfully!</p>"
        
    // }) 
    
   

    return mail
}

export {sendEmail}