import nodemailer from "nodemailer";

interface Props {
  req: {
    method: string;
    body: any;
  };
  res: any;
}

const handler = async (req : any, res : any) => {
  console.log("req", req);
  console.log("res", res);
  if (req.method === "POST") {
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
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;