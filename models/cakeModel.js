const mongoose = require("mongoose");
const Joi = require("joi");

const cakeSchema = new mongoose.Schema({
    name: String,
    cals: Number,
    price: Number,
    category_id: String,
    date_created: {
        type: Date,
        default: function () { return new Date(); }
    }
})

exports.CakeModel = mongoose.model("cakes", cakeSchema);

exports.validateCake = (_reqBody) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        cals: Joi.number().min(1).max(999999).required().allow(null, ""),
        price: Joi.number().min(1).max(999999).required(),
        category_id: Joi.string().min(2).max(100).required(),
    })
    return joiSchema.validate(_reqBody);
}
