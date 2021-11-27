import { NodeEnv } from "$/types/env.type";

const Env = {
  NODE_ENV: process.env.NODE_ENV,
  ENV: new NodeEnv(process.env.APP_ENV ?? ""),
  ORIGIN_URL: process.env.ORIGIN_URL ?? "",

  PORT: parseInt(process.env.PORT ?? ""),

  SMTP_PORT: parseInt(process.env.SMTP_PORT ?? ""),
  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PSWD: process.env.SMTP_PSWD ?? "",

  MAILCHIMP_URL: process.env.MAILCHIMP_URL ?? "",
  MAILCHIMP_KEY: process.env.MAILCHIMP_API_KEY ?? "",

  EMAIL_FROM: process.env.EMAIL_FROM ?? "",
  EMAIL_TO: process.env.EMAIL_TO ?? "",

  LOG_FILE: "sms-next.log",
};

export default Env;
