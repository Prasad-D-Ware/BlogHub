import z from "zod";

//signup input validations for backend
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

//signin input validations for backend
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

//creating input validations for backend
export const creatBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

//updating input validations for backend
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

//types for frontend
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreatBlogInput = z.infer<typeof creatBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
