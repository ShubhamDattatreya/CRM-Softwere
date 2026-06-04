const Hospital = require("../../module/Hospital");
// const { findByIdAndUpdate } = require("../../module/user");

const createHospital = async (req, res) => {
    try {
        const DataCreate = await Hospital.create(req.body);

        res.status(200).json({
            message: "Hospital is Created",
            data: DataCreate
        });
    } catch (error) {
        console.log("Error in hospital Creation", error);

        res.status(500).json({
            message: "Hospital is not created"
        });
    }
};

const FeatchHospital = async (req, res) => {
    try {
        const FindHospital = await Hospital.find(req.body);

        res.status(200).json({
            message: "data Featch Successfully",
            data: FindHospital
        })

        if (!FindHospital) {
            res.status(400).json({
                message: "Not featching hospital data"
            })
        }
    } catch (error) {
        console.error(error)
    }
}
const HospitalUpdate = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ message: "id is not found" });
        }

        const UpdateHospital = await Hospital.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!UpdateHospital) {
            return res.status(404).json({
                message: "Hospital not found"
            });
        }

        return res.status(200).json({
            message: "Hospital data updated successfully",
            data: UpdateHospital
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


const HospitalDelete = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "id is not detact" })
        }
        const Deletehos = await Hospital.findByIdAndDelete(id, 
            req.body,
             { new: true, runValidators: true })

        if (!Deletehos) {
            return res.status(404).json({ message: "Hospital is not deleated", })
        }
        return res.status(200).json({
            message: "Hospital data updated successfully",
            data: Deletehos
        });
    } catch (error) {
        console.error(error)
    }}

    module.exports = { createHospital, FeatchHospital, HospitalUpdate,HospitalDelete };