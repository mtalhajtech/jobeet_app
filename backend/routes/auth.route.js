import express from 'express'
import { register,login,refreshAccessToken } from '../controller/auth.controller.js'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)
router.post("/refreshAccessToken",refreshAccessToken)

export default router