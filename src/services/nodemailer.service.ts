import { transporter } from "../configuration/nodemailerConfig";

export class NodemailerService {
  async sendEmail(email: string, subject: string, html: string) {
    try {
      await transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: subject,
        text: html,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
