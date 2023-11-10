import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

interface Props {
  req: {
    method: string;
    body: any;
  };
  res: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req", req);
  console.log("req", req.body);
  const { from, to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webcraftersok@gmail.com',
      pass: 'uobz pdry qiyt gamo',
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail({...mailOptions});
    return NextResponse.json({message: "Email sent succesfully"}, {status: 200});
  } catch (error: any) {
    return NextResponse.json({message: "Failed to send Email"}, {status: 500})
  }
  
};

export default handler;