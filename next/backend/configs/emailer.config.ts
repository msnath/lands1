import nodemailer from "nodemailer";
import Env from "#/configs/env.config";

const Emails = {
  From: Env.EMAIL_FROM,
  To: Env.EMAIL_TO,
};

const transporter = nodemailer.createTransport({
  secure: true,
  port: Env.SMTP_PORT,
  host: Env.SMTP_HOST,
  auth: {
    user: Env.SMTP_USER,
    pass: Env.SMTP_PSWD,
  },
});

const Emailer = { Emails, transporter };

export default Emailer;
