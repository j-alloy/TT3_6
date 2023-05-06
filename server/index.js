import express from "express"
import cors from "cors"
import "./loadEnvironment.js"
import employee from "./routes/employee.js"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/employee", employee)

app.listen(5000, () => {
  console.log(`Server Running on Port ${PORT}`);
});
