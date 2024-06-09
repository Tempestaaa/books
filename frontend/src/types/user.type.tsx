import { z } from "zod";
import { bookSchema } from "./book.type";

export const loginForm = z.object({
  email: z.string().email().trim().min(1, { message: "Required" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must at least 6 characters" }),
});
export type UserLogin = z.infer<typeof loginForm>;

export const registerForm = loginForm.extend({
  username: z.string().trim().min(1, { message: "Required" }),
  confirmPassword: z
    .string()
    .trim()
    .min(6, { message: "Password must at least 6 characters" }),
});
export type UserRegister = z.infer<typeof registerForm>;

export const userSchema = registerForm.omit({ confirmPassword: true }).extend({
  _id: z.string().trim(),
  isAdmin: z.boolean(),
  image: z.string().trim(),
  favourites: z.array(z.string()),
});
export type User = z.infer<typeof userSchema>;

export const updateForm = userSchema.pick({
  email: true,
  username: true,
});
export type UserUpdate = z.infer<typeof updateForm>;
