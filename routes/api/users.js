var router = require("express").Router();
// var auth = require("../auth");
var Sockets = require("../../sockets");
var mongoose = require("mongoose");
var Member = mongoose.model("Member");

router.get("/", async (req, res, next) => {
    try {
        let users = await Member.find({});
        return res.send(users);
    } catch (err) {
        console.log("Error : " + err);
        if (err) {
            return res.send(500, { error: err });
        }
    }
});

router.post("/", async (req, res, next) => {
    const user = new Member(req.body.user);
    try {
        await user.save();
        const users = await Member.find({});
        return res.send(users);
    } catch (err) {
        console.log("Error : " + err);
        if (err) {
            return res.send(500, { error: err });
        }
    }
});

router.delete("/", async (req, res, next) => {
    try {
        await Member.remove();
        users = await Member.find({});
        return res.send(users);
    } catch (err) {
        console.log("Error : " + err);
        if (err) {
            return res.send(500, { error: err });
        }
    }
});

router.put("/", async (req, res, next) => {
    const { user } = req.body;
    try {
        Member.update(
            { _id: user._id },
            user,
            { upsert: true },
            async (err, doc) => {
                if (err) {
                    return res.send(500, { error: err });
                }
                const users = await Member.find({});
                return res.send(users);
            }
        );
    } catch (err) {
        console.log("Error : " + err);
        if (err) {
            return res.send(500, { error: err });
        }
    }
});

module.exports = router;
