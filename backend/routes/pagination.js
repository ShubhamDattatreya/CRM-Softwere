const express = require("express");
const Hospital = require("../module/Hospital");
const router = express.Router();

router.get("/pagination", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    try {
        // 1. Hospital model se page ka data nikal rahe hain
        const pageData = await Hospital.find().sort({_id: 1}).skip(skipIndex).limit(limit);

        const TotalItems = await Hospital.countDocuments(); 
        const TotalPage = Math.ceil(TotalItems / limit);

        res.json({
            data: pageData,     
            currentPage: page,    
            totalPages: TotalPage, 
            totalItems: TotalItems  
        });
    } catch (error) {
        // Error ko console log kar lein taaki future mein terminal pe error dikhe
        console.error("Pagination Error: ", error); 
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;