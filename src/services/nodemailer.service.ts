import { transporter } from "../configuration/nodemailerConfig";
import enviromentConfig from '../configuration/enviromentConfig';

export class NodemailerService {
  async sendEmail(email: string, subject: string, html: string) {
    try {
      await transporter.sendMail({
        from: enviromentConfig.nodemailer.user,
        to: email,
        subject: subject,
        text: html,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
