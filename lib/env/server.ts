import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";
export const serverEnv = createEnv({
  server: {
    POSTGRES_USER: z.string().min(1),
    POSTGRES_DB: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
  },
  runtimeEnv: {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  },
});
