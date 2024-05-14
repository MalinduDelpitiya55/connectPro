import mongoose from 'mongoose';

const { Schema } = mongoose;

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "seller" // Assuming default role is "seller"
    }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;