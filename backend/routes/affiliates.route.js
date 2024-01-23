import express from 'express'
import {createAffiliate,getAffiliates,activateAffiliate, deActivateAffiliate} from '../controller/affliate.controller.js'
const router = express.Router()


router.post('/create',createAffiliate)
router.get('/all',getAffiliates)
router.get('/activeAffiliate/:affiliateId',activateAffiliate)
router.get('/deActiveAffiliate/:affiliateId',deActivateAffiliate)
export default router