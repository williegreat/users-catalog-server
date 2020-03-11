var mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema(
    {
        id: { type: Number, required: [true, "can't be blank"] },
        firstName: {
            type: String,
            max: 20,
            required: [true, "can't be blank"]
        },
        lastName: { type: String, required: [true, "can't be blank"] },
        gender: {
            type: String,
            enum: ["f", "m"],
            required: [true, "can't be blank"]
        },
        maritalStatus: {
            type: String,
            enum: ["s", "m", "d", "w"],
            required: [true, "can't be blank"]
        },
        age: {
            type: Number,
            min: 0,
            max: 120,
            required: [true, "can't be blank"]
        },
        kids: [{ name: "string" }]
    },
    { timestamps: true }
);

mongoose.model("Member", MemberSchema);
