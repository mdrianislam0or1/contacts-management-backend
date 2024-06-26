import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const validateRequest = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body, { convert: false });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationIssues = error.errors.map((err: any) => ({
          path: err.path.join("."),
          message: err.message,
        }));

        const errorMessage = validationIssues
          .map((issue) => `${issue.path} is ${issue.message}`)
          .join(". ");

        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errorMessage,
          errorDetails: {
            issues: validationIssues,
            name: "ZodError",
          },
          stack: error.stack,
        });
      }

      next(error);
    }
  };
};

export default validateRequest;
