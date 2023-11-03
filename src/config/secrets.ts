import dotenv from "dotenv";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(".env folder not found");
}

const API_KEY = process.env.API_KEY;

export default API_KEY;
