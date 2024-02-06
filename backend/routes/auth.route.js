import express from 'express'

import { register,login,refreshAccessToken,logout } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/login',login)
router.post('/register',register)
router.get("/refreshAccessToken",refreshAccessToken)
// router.get("/validateAccessToken",validateAccessToken)
router.get("/validateToken",)
router.get('/logout',logout)
export default router