const express = require("express");
const router = express.Router()    
const admin = require("../module/Ica");


router.post("/adminRegister", async (req, res) => {
    try {
        const createInfoAdmin = await admin.create(req.body);

        res.status(201).json({
            message: "Admin Data Submitted",
            data: createInfoAdmin,
        });
    } catch (error) {
        console.log("Error in adminRegister:", error);
 
        res.status(500).json({ message: "Server Error", error: error.message });
    }
})


 
router.get("/adminFetch", async (req, res) => {
    try {
        const createInfoAdmin = await admin.find(req.body);

        res.status(200).json({
            message: "admin fetched",
            data: createInfoAdmin
        });
    } catch (error) {
        console.log("Error in admin Fetch:", error);
 
        res.status(500).json({ message: "Server Error", error: error.message });
    }
})

router.put("/block/:id",   async (req, res) => {
  try {
    const adminId = req.params.id;
    
  const CancelAdmin = await admin.findByIdAndUpdate(
      adminId,
      { status: "blocked" },
      { new: true } 
    );

    if (!CancelAdmin) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      });
    }

    res.json({
      success: true,
      data: CancelAdmin
    });
    
  } catch (error) {
    console.log("Database update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

router.delete("/delete/:id", async(req,res)=>{
  try{
    const AdminDelete = req.params.id;
   const Delete = await admin.findByIdAndDelete(
    AdminDelete,
   );

if(!Delete){
  return res.status(404).json({
    success: false,
    message: "User not found!"
  });
}

res.json({
  success: true,
  data: Delete
});
  }
  catch (error) {
    console.log("Database update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
})




module.exports = router;