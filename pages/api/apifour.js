import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../services/mailsService";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      // Extract data from the request body
      const {
        name,
        dob,
        phone,
        email,
        address,
        qualification,
        course,
        pg_diploma,
        parent_name,
        parent_phone,
        message,
      } = req.body;

      // Send email with form data
      await sendMail({
        subject: "Admission Form Submission",
        to: "razoralf67@gmail.com",
        name,
        email,
        message,
        // Add other form data here
        dob,
        phone,
        address,
        qualification,
        course,
        pg_diploma,
        parent_name,
        parent_phone,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
};

export default handler;
