import express from "express"
import { employee } from "../controller/employee.js";


const router = express.Router()

router.get("/", employee);

export default router
