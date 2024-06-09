import { z } from "zod";

export const reviewSchema = z.object({
  _id: z.string().trim(),
  userId: z.string().trim(),
  userName: z.string().trim(),
  userImage: z.string().trim(),
  comment: z.string().trim().max(250, { message: "Maximum 250 characters" }),
  rating: z.coerce.number().positive().min(0).max(10, "Maximum 10"),
});
export type ReviewType = z.infer<typeof reviewSchema>;
