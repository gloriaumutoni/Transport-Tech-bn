import nodemailer from "nodemailer"
 

let mailerTransporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"munyeshurimanzi@gmail.com",
        pass:"Munyeshuri@1"
}
})

let details={
    from:"munyeshurimanzi@gmail.com",
    to :"alainmanzi71@gmail.com",
    subject:"you have successfull signup",
    text:"you have succefull signup to transport sollution "
}
mailerTransporter.sendMail(details,(err=>{
if (err){
    console.log()
}
}))