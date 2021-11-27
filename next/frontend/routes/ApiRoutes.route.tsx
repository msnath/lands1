import { ApiResponse } from "$/types/api.type";
import { TApiCountry } from "$/types/country.type";
import axios from "axios";
import Env from "frontend/configs/env.config";

const ApiRoutes = {
  Next: {
    subscribe: async (email: string) => {
      try {
        const reqBody = { email };
        const res = await axios.post<any>("/api/subscribe", reqBody);
        console.log(res);
        if (res.data.success) {
          return ApiResponse.success(res.data.response ?? "");
        } else {
          return ApiResponse.failure(res.data.response ?? "");
        }
      } catch (err) {
        console.error((err as any).response);
        return ApiResponse.failure("Oops! An error occurred.");
      }
    },

    contactUs: async (
      givenName: string,
      familyName: string,
      phoneNumber: string,
      email: string,
      enquiryType: string,
      message: string
    ) => {
      try {
        const reqBody = {
          givenName,
          familyName,
          phoneNumber,
          email,
          enquiryType,
          message,
        };
        const res = await axios.post<any>("/api/contact-us", reqBody);
        console.log(res);
        return ApiResponse.success();
      } catch (err) {
        console.error(err);
        return ApiResponse.failure();
      }
    },
  },

  countries: async () => {
    try {
      const res = await axios.post<any>(Env.UCP_API_URL + "/search/countries", {
        pagination: { limit: "ALL" },
      });
      console.log(res);
      return res.data.results as TApiCountry[];
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  university: async (id: number) => {
    try {
      const res = await axios.post<any>(
        Env.UCP_API_URL + "/search/institutes/" + id,
        { format: ["course_details"] }
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return {};
    }
  },

  course: async (id: number) => {
    try {
      const res = await axios.post<any>(
        Env.UCP_API_URL + "/search/courses/" + id,
        {
          format: ["institute_details"],
        }
      );
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return {};
    }
  },
};

export default ApiRoutes;
