import express from "express"
import { getClaims, createClaims } from "../controllers/claims.js"

const router = express.Router()


router.get("/", getClaims)
router.post("/", createClaims)

export default router
