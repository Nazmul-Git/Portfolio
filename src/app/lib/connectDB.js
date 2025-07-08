
import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u2vsupc.mongodb.net/portfolio-database?retryWrites=true&w=majority&appName=Cluster0`

const ConnectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return mongoose.connection.db;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected!");
        return mongoose.connection.db;
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

export default ConnectDB;