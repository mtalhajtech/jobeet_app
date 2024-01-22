import express from 'express'
import {createAffiliate,getAffiliates} from '../controller/affliate.controller.js'
const router = express.Router()


router.post('/create',createAffiliate)
router.get('/all',getAffiliates)


export default router