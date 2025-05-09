import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./services/schema.tsx",
  dbCredentials:{
    url: 'postgresql://Promptly-AI%20content%20Gen_owner:npg_q1OKITZvh4Go@ep-soft-darkness-a4zmgs9m-pooler.us-east-1.aws.neon.tech/Promptly-AI%20content%20Gen?sslmode=require',
  }
});
