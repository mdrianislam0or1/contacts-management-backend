import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;

  message?: string;
  errorMessage?: string;
  errorDetails?: any;
  stack?: any;
  data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const {
    success,
    statusCode,
    message,
    errorMessage,
    errorDetails,
    stack,

    data: responseData,
  } = data;

  res.status(statusCode).json({
    success,
    statusCode,
    message,
    errorMessage,
    errorDetails,
    stack,

    data: responseData,
  });
};

export default sendResponse;
