const jst = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema");
router.get('/', (req, res) => {
    res.send('<h1>This is router page</h1>');
});

// router.post('/register', async (req, res) => {


//     const { name, email, phone, work, password, cpassword } = req.body;
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please filled the input field" });

//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" });
//             }
//             const user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfuly" });

//             }).catch((err) => res.status(500).json({ erro: "Failed to register" }));
//         }).catch(err => {
//             console.log(err);
//         });
// });

//User register
router.post('/register', async (req, res) => {


    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled the input field" });

    }
    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();


            if (userRegsiter) {
                res.status(201).json({ message: "user registered successfuly" });

            } else {
                res.status(500).json({ erro: "Failed to register" })
            }

        }


    }
    catch (err) {
        console.log(err);
    }

});

//User Login
router.post('/signin', (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please filled the data" })
        }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "User error" });
            } else {

                res.json({ message: "User signin successfully" });
            }

        } else {
            res.status(400).json({ error: "User error" });

        }


    } catch (err) {
        console.log(err);
    }

})

module.exports = router;