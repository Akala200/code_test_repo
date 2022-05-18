/* eslint-disable max-len */
import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGODB_DATABASE: process.env.DB_URL_Live,
};

export default config;
