import { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "next-connect";

export interface ApiResponseJSON<T> {
  success: boolean;
  response: T | null;
}

export class ApiResponse<T> {
  private success: boolean;
  private response: T | null;

  private constructor(success: boolean, response: T | null) {
    this.success = success;
    this.response = response;
  }

  static success<T>(response?: T): ApiResponse<T> {
    return new ApiResponse<T>(true, response ?? null);
  }

  static failure<T>(response?: T): ApiResponse<T> {
    return new ApiResponse<T>(false, response ?? null);
  }

  get json(): ApiResponseJSON<T> {
    return { success: this.success, response: this.response };
  }
}

export type ApiHandler = RequestHandler<NextApiRequest, NextApiResponse>;

export enum ApiMethod {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
}
