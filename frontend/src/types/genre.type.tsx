import { z } from "zod";

export const createForm = z.object({
  name: z.string().trim().min(1, { message: "Required" }),
});
export type GenreCreate = z.infer<typeof createForm>;

export const genreSchema = createForm.extend({
  _id: z.string().trim(),
});
export type Genre = z.infer<typeof genreSchema>;
