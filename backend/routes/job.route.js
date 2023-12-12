import express from 'express'
import {getJobsByCategory,createJob} from '../controller/job.controller.js'
import upload from '../middlewares/imageuploader.js'
const router = express.Router()

router.get('/:categoryId',getJobsByCategory)
router.post('/post',upload.single('file'), createJob)

export default router