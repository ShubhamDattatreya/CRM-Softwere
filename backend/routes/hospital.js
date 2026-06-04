const express = require("express");
const router = express.Router();

const { createHospital, FeatchHospital, HospitalUpdate, HospitalDelete } = require("../controller/ICA/adminController");
const verifyToken = require("../middleweres/auth");
// const verifyToken = require("../middleweres/auth");

router.post("/hospital",verifyToken, createHospital);
router.get("/hospital",verifyToken, FeatchHospital);
router.put("/hospital/:id",verifyToken, HospitalUpdate);
router.delete("/hospital/:id",verifyToken, HospitalDelete);

module.exports = router;