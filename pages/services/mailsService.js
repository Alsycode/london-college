var nodemailer = require("nodemailer");

export async function sendMail({
  subject,
  toEmail,
  otpText,
  name,
  email,
  dob,
  phone,
  address,
  qualification,
  course,
  pg_diploma,
  parent_name,
  parent_phone,
}) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shyamalfred@gmail.com",
      pass: "yjkmdhmxtflkbzfk",
    },
    tls: {
      rejectUnauthorized: false, // Disable SSL verification
    },
  });

  var mailOptions = {
    from: "shyamalfred@gmail.com",
    to: "shyamalfred@gmail.com",
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Date of Birth: ${dob}
      Phone: ${phone}
      Address: ${address}
      Qualification: ${qualification}
      Course: ${course}
      PG Diploma: ${pg_diploma}
      Parent Name: ${parent_name}
      Parent Phone: ${parent_phone}
      Message: ${otpText}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
