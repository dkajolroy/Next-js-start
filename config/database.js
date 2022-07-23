
import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/next_app")
        .then(() => console.log("Connected server"))
        .catch(() => console.error("Database connection error"))
}
export default connectDB