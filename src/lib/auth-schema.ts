import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast 2 character long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a vaild email address" })
    .min(2)
    .max(50),

  password: z
    .string()
    .min(8, { message: "Passord must be atleast 8 character long" })
    .max(50, { message: "Password cannot exceed 50 characters" }),
});

export const signInFormSchema = signUpFormSchema.pick({
  email: true,
  password: true,
});
