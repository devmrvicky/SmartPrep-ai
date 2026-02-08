import z from "zod";

export const emailRegisterSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Email is invalid"),
});

export const signupSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

export type EmailRegisterInput = z.infer<typeof emailRegisterSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
