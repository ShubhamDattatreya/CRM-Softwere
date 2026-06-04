
// const express = require("express");
// const router = express.Router();
// const User = require("../module/user");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Admin = require("../module/Ica");
// const { AdminPopupUpdate } = require("../controller/ICA/superAdminController");
// require('dotenv').config();


// router.put("/update/:id", AdminPopupUpdate)


// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email: email, role: "SuperAdmin" });
// if (user) {
//     if (user.password !== password) {
//         return res.status(401).json({
//             success: false,
//             message: "Wrong password"
//         });
//     }

//     return res.status(200).json({
//         success: true,
//         userId: user._id,
//         role: user.role,
//         email: user.email,
//     });
// }


//         const roles = ["Admin", "SuperAuditor", "CXO"];

//         const userData =  Admin.findOne({
//             email: email,
//             role: { $in: roles }
//         });

//         if (userData) {
//             const isMatch = await bcrypt.compare(password, userData.password);

//             if (!isMatch) {
//                 return res.status(401).json({
//                     success: false,
//                     message: "Wrong password"
//                 });
//             }

//             // Generate JWT
//             const token = jwt.sign(
//                 {
//                     userId: userData._id,
//                     role: userData.role
//                 },
//                process.env.JWT_SECRET,
//                 { expiresIn: "1d" }
//             );

//             return res.status(200).json({
//                 success: true,
//                 token,
//                 userId: userData._id,
//                 role: userData.role,
//                 email: userData.email,
//             });
//         }

//         return res.status(404).json({
//             success: false,
//             message: "User not found"
//         });

//     } catch (error) {
//         console.log("Error while login:", error);
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const User = require("../module/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require("../module/Ica");
const { AdminPopupUpdate } = require("../controller/ICA/superAdminController");

require('dotenv').config();

router.put("/update/:id", AdminPopupUpdate);

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email: email, role: "SuperAdmin" });


        if (user) {
            if (user.password !== password) {
                return res.status(401).json({
                    success: false,
                    message: "Wrong password"
                });
            }
            return res.status(200).json({
                success: true,
                userId: user._id,
                role: user.role,
                email: user.email,
            });
        }

        const roles = ["Admin", "SuperAuditor", "CXO"];

        const userData = await Admin.findOne({ email: email, role: { $in: roles } });

        if (userData) {
            const isMatch = await bcrypt.compare(password, userData.password);

            if (!isMatch) {
                return res.status(401).json({ 
                    success: false,
                    message: "Wrong password"
                });
            }

            const token = jwt.sign(
                {
                    userId: userData._id,
                    role: userData.role
                },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );



            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",  
              });
            

            return res.status(200).json({

                success: true,
                token,
                userId: userData._id,
                role: userData.role,
                email: userData.email,
            });
        }

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    } catch (error) {
        console.log("Error while login:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;