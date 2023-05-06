import express from "express"
import db from "../db/conn.js"
import {login} from "../controllers/user_controller.js"

const router = express.Router()


router.get("/",login);

export default router
