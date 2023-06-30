import nodemailer from 'nodemailer';
const emailSender=(email,message,task)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
         user: 'transportcode2023@gmail.com  ',
         pass: ' hcycpozjyailjeiu',
        },
      });
  
      var mailOptions = {
        from: 'transportcode2023@gmail.com ',
        
        // to: "ishimwerichard26@gmail.com",
        to: `${email}`,
      
        subject: `${task}`,
        text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
        html: `${message}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: %s', info);
        }
        console.log('Message sent: %s', info);
      });
}
export default emailSender