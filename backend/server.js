

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminCreate = require("./routes/icaAdmin")
const emailRoutes = require("./routes/icaSuperAdmin");
const router = require("./routes/userRoutes");
const createHos = require("./routes/hospital")
const fetchHos = require("./routes/hospital")
const updateHos = require("./routes/hospital")
const DeleteHos = require("./routes/hospital");
const AdminPopupUpdate = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
// const { AdminPopupUpdate } = require("./controller/ICA/superAdminController");
const Pagination = require("./routes/pagination")




connectDB();

app.use(cors({
  origin: true,
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/userAdmin", userRoutes);
app.use("/admin", adminCreate);
app.use("/api/email", emailRoutes); 
app.use("/api/Pagination", Pagination); 

// app.use("/adminUpdate",router ); 



app.use("/adminPopupUpdate",AdminPopupUpdate)
app.use("/adminDelete",router)
app.use("/apihospital",createHos)
app.use("/apihospital",fetchHos)
app.use("/apihospital",updateHos)
app.use("/apihospital",DeleteHos)






app.get("/timezone", (req, res) => {
  const Utc = {
      event: "Meeting",
      startTime: new Date().toISOString()
    };
  res.json(Utc);
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

