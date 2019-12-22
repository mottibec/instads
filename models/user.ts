import mongoose from "mongoose";

interface iUser extends mongoose.Document {
    name: string;
    avatar: string;
    email?: string;
    whatsapp: string;
    instagram: string;
    topPost: string,
    followersCount: number;
    conversionRate: number;
    activeFollowers: number;
    priceForPost: number;
    location: string;
    categories: Category[];
}


export { iUser };