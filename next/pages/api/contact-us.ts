import AllMiddleware from "#/middlewares/all.middleware";
import EmailService from "#/services/email.service";
import { ApiHandler, ApiMethod, ApiResponse } from "$/types/api.type";

const ContactUs: ApiHandler = async (req, res, next) => {
  const { givenName, familyName, phoneNumber, email, enquiryType, message } =
    req.body;

  await EmailService.Team.contactUs(
    givenName,
    familyName,
    phoneNumber,
    email,
    enquiryType,
    message
  );

  const response = ApiResponse.success();
  res.json(response.json);

  next();
};

export default AllMiddleware.basic({
  handler: ContactUs,
  method: ApiMethod.POST,
});
