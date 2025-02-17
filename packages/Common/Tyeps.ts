import { z } from "zod";

export const Trainingmodel = z.object({
  name: z.string().min(1),
  type: z.enum(["Men", "Women"]),
  age: z.number().min(1),
  ethnicity: z.enum(["White", "Black", "Asian", "Hispanic", "Indian", "Other"]),
  eye: z.enum(["Blue", "Brown", "Green", "Hazel", "Gray", "Other"]),
  bold: z.boolean(),
  image: z.array(z.string()),
});

export const GenerateModel = z.object({
  prompt: z.string(),
  modelId: z.string(),
});

export const GenerateImage = z.object({
  prompt: z.string(),
  modelId: z.string(),
  n: z.number(),
});
