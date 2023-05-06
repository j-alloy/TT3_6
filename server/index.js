import express from "express"
import cors from "cors"
import "./loadEnvironment.js"
import currency from "./routes/currency.js"
import department from "./routes/department.js"
import employee from "./routes/employee.js"
import employeeprojects from "./routes/employeeprojects.js"
import projectexpenseclaims from "./routes/projectexpenseclaims.js"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/employee", employee)
app.use("/employeeprojects", employeeprojects)
app.use("/projectexpenseclaims", projectexpenseclaims)
app.use("/currency", currency)
app.use("/department", department)

app.listen(5000, () => {
  console.log(`Server Running on Port ${PORT}`);
});
