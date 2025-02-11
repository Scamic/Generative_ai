/** @type {import("drizzle-kit").Config} */

export default {
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_uQzUe9yKhm2O@ep-dry-water-a5b8fda9-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
};
