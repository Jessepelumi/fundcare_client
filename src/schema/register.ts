import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, { message: "This field cannot be empty" }),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      {
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    ),
});
