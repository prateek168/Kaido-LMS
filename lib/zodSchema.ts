import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const CourseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office porductivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching",
] as const;
export const CourseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),
  fileKey: z
    .string()
    .min(1, { message: "A file is required. Please upload a file." }),
  price: z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0" }),
  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(1000, { message: "Duration cannot exceed 1000 hours" }),
  level: z.enum(courseLevels, {
    message: "Please select a valid course level",
  }),
  category: z.enum(courseCategories , { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Short description must be at least 3 characters long" })
    .max(200, { message: "Short description cannot exceed 200 characters" }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
  status: z.enum(CourseStatus, {
    message: "Please select a valid status",
  }),
});

export type CourseSchemaType = z.infer<typeof CourseSchema>;
