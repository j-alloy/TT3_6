import express from "express"
import { getClaims, createClaims, updateClaims, deleteClaims } from "../controllers/claims.js"

const router = express.Router()


router.get("/", getClaims)
router.post("/", createClaims)
router.put("/", updateClaims)
router.delete("/", deleteClaims)

export default router
