import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type userSchemaType = z.infer<typeof userSchema>;

export enum ThemeModes {
  light = "light",
  dark = "dark",
}
