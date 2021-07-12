const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");
router.get('/', (req, res) => {
    res.send('<h1>This is router page</h1>');
});

router.post('/register', (req, res) => {


    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled the input field" });

    }
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "email already exist" });
            }
            const user = new User({ name, email, phone, work, password, cpassword });

            user.save().then(() => {
                res.status(201).json({ message: "user registered successfuly" });

            }).catch((err) => res.status(500).json({ erro: "Failed to register" }));
        }).catch(err => {
            console.log(err);
        });


});

module.exports = router;