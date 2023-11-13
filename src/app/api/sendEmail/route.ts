import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { TransportOptions } from "nodemailer";
import { promises as fsPromises } from 'fs';

interface Props {
  req: {
    method: string;
    body: any;
  };
  res: any;
}

interface Attachment {
  filename: string;
  content: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: process.env.SMTP_PORT || "",
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
} as TransportOptions);

transporter.verify(function (error) {
  if (error) {
    console.log(error, "Inside Error");
  } else {
    console.log("Server is ready to take our messages");
  }
});

export async function POST(request: NextRequest, res: NextApiResponse) {
  const req = await request.json();
  const { from, to, subject, text, attachments } = req;

  try {
    const mailOptions = {
      from,
      to,
      subject,
      text,
      attachments: await Promise.all(attachments.map(async (attachment: Attachment) => {
        // Assuming attachment.content is a base64-encoded string representing the file content
        const fileContent = Buffer.from(attachment.content, 'base64');

        // Use fs.promises.writeFile to write the file to the server
        const filePath = `./path/to/save/${attachment.filename}`;
        await fsPromises.writeFile(filePath, fileContent);

        return {
          filename: attachment.filename,
          path: filePath,
        };
      })),
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
    // await transporter.sendMail({ ...mailOptions });
    return NextResponse.json(
      { message: "Email sent succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send Email" },
      { status: 500 }
    );
  }
}
