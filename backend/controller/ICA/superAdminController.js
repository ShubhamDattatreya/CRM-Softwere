const Admin = require("../../module/Ica");

// const AdminPopupUpdate =  async (req, res) => {
//     try {
//         const id = req.params.id;

//         if (!id) {
//             return res.status(400).json({ message: "User ID is required" });
//         }

//         const updateData = {};

//         if (req.body.password) {
//             updateData.password = req.body.password;
//         }

//         if (req.body.role) {
//             updateData.role = req.body.role;
//         }

//         const updatedUser = await Admin.findByIdAndUpdate(
//             id,
//             updateData,
//             { new: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json({
//             message: "User updated successfully",
//             data: updatedUser
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: "Error updating user",
//             error: error.message
//         });
//     }
// };





const bcrypt = require("bcrypt");
const AdminPopupUpdate = async (req, res) => {
    try {
      const { email, password, role } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const UserData = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          email,
          password: hashedPassword,
          role,
        },
        { new: true }
      );
  
      if (UserData) {
        return res.status(200).json({
          message: "User updated successfully",
          data: {
            id: UserData._id,
            email: UserData.email,
            role: UserData.role,
          },
        });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = {AdminPopupUpdate}