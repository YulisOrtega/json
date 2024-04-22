import { Schema, model } from "mongoose";

const productShema = new Schema({
    humidity: Number,
    temperature: Number,
    proximityDistance: Number,
    timestamp: { type: Date, default: Date.now }
});

export default model('Products', productShema);
