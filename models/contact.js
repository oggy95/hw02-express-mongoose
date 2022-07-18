import mongoose from "mongoose";

const {Schema, model} = mongoose;

const contactSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
    favorite: {
        type: Boolean,
        enum: [true, false],
        default: false,
    }
}, {versionKey: false, timestamps: true});

const handleErrors = (error, data, next) => {
    const {name, code} = error;
    error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next()
}

contactSchema.post("save", handleErrors);

const Contact = model("contact", contactSchema);

export default Contact;