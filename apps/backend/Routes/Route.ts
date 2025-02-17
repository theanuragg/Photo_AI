import { Router } from 'express'
import controller from '../Controller/controller'

const router = Router()

router.use('/api', controller)

export default router
