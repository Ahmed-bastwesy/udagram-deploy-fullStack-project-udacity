import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: process.env.POSTGRES_USERNAME || `postgres`,
  password: process.env.POSTGRES_PASSWORD  || "123",
  database: process.env.POSTGRES_DB || "udagram",
  port: Number(process.env.PORT) ,
  dbPort: Number(process.env.DB_PORT) || 5432 ,
  host: process.env.POSTGRES_HOST || "localhost",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL ||"http://localhost",
  jwt: {
    secret: process.env.JWT_SECRET || "no_secret",
  },
};
