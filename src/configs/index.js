import dotenv from "dotenv"

dotenv.config()

const config ={
    PORT:process.env.PORT || 2067,
    DB:process.env.DB || "mongodb://localhost:27017/Authentication"
}

export default config;