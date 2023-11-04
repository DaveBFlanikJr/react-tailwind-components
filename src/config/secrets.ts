import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "staging", "production"]),
  API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
