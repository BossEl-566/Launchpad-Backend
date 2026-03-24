import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';

config({
  path: `.env.${env}.local`,
});

console.log('ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);

export const { PORT, NODE_ENV } = process.env;