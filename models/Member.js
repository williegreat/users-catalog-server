var mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema(
    {
        id: { type: Number, required: [true, "can't be blank"] },
        firstName: { type: String, required: [true, "can't be blank"] },
        lastName: { type: String, required: [true, "can't be blank"] },
        gender: { type: String, required: [true, "can't be blank"] },
        maritalStatus: { type: String, required: [true, "can't be blank"] },
        age: { type: String, required: [true, "can't be blank"] },
        kids: [{ name: "string" }]
    },
    { timestamps: true }
);

mongoose.model("Member", MemberSchema);
