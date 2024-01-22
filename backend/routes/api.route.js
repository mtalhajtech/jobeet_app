import express, { Router } from 'express'
import { getJobs } from '../controller/api.controller.js'
const router= express.Router()

router.get('/:token/jobs',getJobs)

export default router