import express from 'express'
import {createAffiliate} from '../controller/affliate.controller.js'
const router = express.Router()


router.post('/create',createAffiliate)

export default router