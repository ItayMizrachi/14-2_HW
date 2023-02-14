const mongoose = require("mongoose");
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
    name: String,
    cat_url: String,
    info: String,
    img_url: String,
    date_created: { type: Date, default: Date.now }
})

exports.bookModel = mongoose.model("books", bookSchema);

exports.validateBook = (_reqBody) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        cat_url: Joi.string().min(1).max(999).required(),
        info: Joi.string().min(1).max(999).required(),
        img_url: Joi.string().min(2).max(400).allow(null, "")
    })
    return joiSchema.validate(_reqBody);
}
