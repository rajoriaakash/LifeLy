import nodemailer from "nodemailer";
export const sendAppointment = async (req,res) => {
    const{
        name,
        email,
        mobile,
        doctor_name,
        fees,
        discounted_fees,
        discount,
        doctor_phone,
    } = req.body;
    // const htmlMessage = `
    //     <p>Dear ${doctor_name},</p>
    //     <p>I hope this email finds you well. I am writing to confirm my appointment with you on [Date] at [Time]. I have provided the details of the appointment below for your reference:</p>
    //     <ul>
    //         <li>Parent Name: ${name}</li>
    //         <li>Parent Email: ${email}</li>
    //         <li>Parent Mobile: ${mobile}</li>
    //         <li>Appointment Fees: ${fees}</li>
    //         <li>Discounted Fees: ${discounted_fees}</li>
    //         <li>Discount Percentage: ${discount}</li>
    //         <li>Doctor's Phone: ${doctor_phone}</li>
    //     </ul>
    //     <p>If there are any changes to the appointment or if you have any questions, please let me know. I look forward to meeting with you.</p>
    //     <p>Thank you,</p>
    //     <p>${name}</p>
    //     `;
    const currentDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const currentTime = new Date(currentDate);

    const date = new Date();
    date.setDate(date.getDate() + 7);

    // Format the date to 'DD/MM/YYYY' format
    const appointmentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    // Generate a random time for the appointment
    const appointmentTime = `${Math.floor(Math.random() * 12) + 1} ${Math.random() >= 0.5 ? 'AM' : 'PM'}`;
    const message = `
    Dear ${name},

    I hope this email finds you well. I am writing to confirm your child's appointment with Dr. ${doctor_name} on ${appointmentDate} at ${appointmentTime}. We have provided the details of the appointment below for your reference:
    
    Parent Name: ${name}
    Parent Email: ${email}
    Parent Mobile: ${mobile}
    Appointment Fees: ${fees}
    Discounted Fees: ${discounted_fees}
    Discount Percentage: ${discount}
    Doctor's Phone: ${doctor_phone}
    
    If there are any changes to the appointment or if you have any questions, please let us know. We look forward to meeting with you and your child.
    Thank you,
    ${name}
    `;

      // Create a nodemailer transport object
    const transporter = nodemailer.createTransport({
    secure:true,
    service: "gmail",
    auth: {
      user: "miscellaneous250103@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  // Define email message options
  const mailOptions = {
    from: "miscellaneous250103@gmail.com",
    to: email,
    subject: `Message from LifeLy`,
    text: message,
    // htmlMessage : htmlMessage
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send("Email sent successfully");
    }
  });
}

export const sendNewsletter  = async (req,res) => {
  const {email} = req.body;  
  // Create a nodemailer transport object
  const transporter = nodemailer.createTransport({
    secure:true,
    service: "gmail",
    auth: {
      user: "miscellaneous250103@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Define email message options
  const mailOptions = {
    from: "miscellaneous250103@gmail.com",
    to: email,
    subject: 'Thanks for subscribing to LifeLy!',
    text: 'Dear subscriber,\n\nThank you for subscribing to LifeLy! We are excited to have you as a part of our community. We will keep you updated with the latest news and offers.\n\nBest regards,\nLifeLy Team',
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred while sending newsletter: ', error);
    } else {
      console.log('Newsletter sent successfully: ', info.response);
    }
  });
}