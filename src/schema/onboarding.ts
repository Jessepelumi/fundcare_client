import { z } from "zod"

export const onboardingSchema = z.object({
    type: z.enum(["donor", "organization", "professional"], {
      required_error: "You need to select a role.",
    }),
  })