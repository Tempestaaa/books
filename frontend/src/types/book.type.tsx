import { z } from "zod";
import { genreSchema } from "./genre.type";
import { reviewSchema } from "./review.type";

export const createForm = z.object({
  title: z.string().trim().min(1, { message: "Required" }),
  desc: z.string().trim().min(1, { message: "Required" }),
  author: z.string().trim().min(1, { message: "Required" }),
  pages: z.coerce.number().positive(),
  rating: z.coerce.number().positive().min(0).max(5, { message: "Maximum 5" }),
  genres: z.array(genreSchema),
});
export type BookCreate = z.infer<typeof createForm>;

export const bookSchema = createForm.extend({
  _id: z.string().trim(),
  coverImage: z.string().trim(),
  reviews: z.array(reviewSchema).default([]),
  numberOfReviews: z.coerce.number().positive().default(0),
});
export type Book = z.infer<typeof bookSchema>;
