import { z } from "zod";

export const verifySchema = z.object({
  pin: z
    .string()
    .min(6, { message: "OTP must be 6 characters" })
    .regex(/^\d+$/, { message: "PIN must only contain numbers" }),
});
