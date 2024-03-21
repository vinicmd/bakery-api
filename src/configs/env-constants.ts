export const envConstants = {
  port: process.env.APP_PORT || 8080,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bakery'
}
