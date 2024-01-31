import express from 'express'
import {createAffiliate,getAffiliates,activateAffiliate, deActivateAffiliate,getAffiliateCountByCategory} from '../controller/affliate.controller.js'
import validateToken from '../middlewares/validateToken.js'
const router = express.Router()


router.post('/create',validateToken,createAffiliate)
router.get('/all',getAffiliates)
router.get('/getAffiliateCountByCategory',getAffiliateCountByCategory)
router.get('/activeAffiliate/:affiliateId',validateToken,activateAffiliate)
router.get('/deActiveAffiliate/:affiliateId',validateToken,deActivateAffiliate)
export default router