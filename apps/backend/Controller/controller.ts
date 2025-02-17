import { Router } from 'express'
import type { Trainingmodel, GenerateModel, GenerateImage, GenerateImageVariation } from 'common/types'
const router = Router()

router.post('/api/ai/training', (req, res) => {
   
})

router.post('/api/ai/generate', (req, res) => {
    res.send('Hello World')
})

router.get('/api/ai/images', (req, res) => {
    res.send('Hello World')
})

export default router

