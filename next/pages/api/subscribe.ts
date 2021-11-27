import AllMiddleware from "#/middlewares/all.middleware";
import EmailService from "#/services/email.service";
import { ApiHandler, ApiMethod, ApiResponse } from "$/types/api.type";

const Subscribe: ApiHandler = async (req, res, next) => {
  const { email } = req.body;

  const result = await EmailService.Team.subscribe(email);

  if (result.success) {
    const response = ApiResponse.success(result.message);
    res.json(response.json);
  } else {
    const response = ApiResponse.failure(result.message);
    res.json(response.json);
  }

  next();
};

export default AllMiddleware.basic({
  handler: Subscribe,
  method: ApiMethod.POST,
});
