import axios from "axios";
import Emailer from "#/configs/emailer.config";
import Env from "#/configs/env.config";
import Logger from "#/configs/logger.config";
import { SendMailOptions } from "nodemailer";

class HTML {
  private _html = "";
  bold = (text: string) => {
    this._html += `<div><b>${text}</b><div>`;
    return this;
  };
  text = (text: string) => {
    this._html += `<div>${text}<div>`;
    return this;
  };
  break = () => {
    this._html += `<br />`;
    return this;
  };
  get html() {
    return this._html;
  }
}

const from = Emailer.Emails.From;
const to = Emailer.Emails.To;

const EmailService = {
  Team: {
    contactUs: async (
      givenName: string,
      familyName: string,
      phoneNumber: string,
      email: string,
      enquiryType: string,
      message: string
    ) => {
      try {
        const subject = `SecureMyScholarship - Contact Us: You have a message from ${givenName} ${familyName}`;

        const html = new HTML()
          .bold("First Name")
          .text(givenName)
          .bold("Last Name")
          .text(familyName)
          .bold("Phone Number")
          .text(phoneNumber)
          .bold("Email")
          .text(email)
          .break()
          .bold("Enquiry Type")
          .text(enquiryType)
          .bold("Message")
          .text(message).html;

        const mailOptions: SendMailOptions = { from, to, subject, html };
        await Emailer.transporter.sendMail(mailOptions);
      } catch (err) {
        Logger.error(err);
      }
    },

    subscribe: async (
      email: string
    ): Promise<{ success: boolean; message: string }> => {
      const name = email.substring(0, email.lastIndexOf("@"));
      const data = {
        members: [
          {
            email_address: email,
            status: "subscribed",
            tags: ["SecureMyScholarship"],
            merge_fields: { FNAME: name },
          },
        ],
      };

      const res = await axios.post<any>(Env.MAILCHIMP_URL, data, {
        headers: { Authorization: `auth ${Env.MAILCHIMP_KEY}` },
      });

      delete res.data._links;
      Logger.info(res.data);

      if (res.data.error_count >= 1) {
        switch (res.data.errors[0].error_code) {
          case "ERROR_CONTACT_EXISTS":
            return { success: true, message: "You're already subscribed." };
          case "ERROR_GENERIC":
            return { success: false, message: "Please provide a valid email." };
          default:
            return { success: false, message: "Oops! Something went wrong." };
        }
      } else {
        return {
          success: true,
          message: "Congratulations! You're subscribed!",
        };
      }
    },
  },
};

export default EmailService;
