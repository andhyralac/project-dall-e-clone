import mongoose from 'mongoose';


const connectDB = async (url) => {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(url);
        console.log('MongoDB connected');

    } catch (err) {
        console.error(`Error in connect database: ${err}`);
    } 
}



export default connectDB;