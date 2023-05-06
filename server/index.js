import express from "express"
import cors from "cors"
import "./loadEnvironment.js"
import employee from "./routes/employee.js"
import {login} from "./controllers/user_controller.js";
import bodyParser from "body-parser";
import db from "./db/conn.js";

const PORT = process.env.PORT || 5000;
const app = express();

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.CONNECTION_URL).then(() => {
//   console.log(`Server Running on Port ${PORT}`);
// });
app.use(cors())
app.use(express.json())

app.use("/employee", employee)

app.listen(4000, () => {
  console.log(`Server Running on Port ${PORT}`);
});

// Login endpoint
app.post('/login', login);