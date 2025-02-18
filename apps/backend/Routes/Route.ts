import { Router } from "express";
import {  generateImageHandler, getImagesHandler, TrainModelHandler, webhookHandler, webhookHandlerTrain, downloadZipHandler, preSignedUrlHandler} from "../Controller/controller";

const router = Router();

router.post("api/train", (req, res) => TrainModelHandler(req, res));
router.post("api/generate", (req, res) => generateImageHandler(req, res));
router.get("api/images", (req, res) => getImagesHandler(req, res));
router.post("/fal-ai/webhook/image", (req, res) => webhookHandler(req, res));
router.post("/fal-ai/webhook/train", (req, res) => webhookHandlerTrain(req, res));
router.post("/fal-ai/download-zip", (req, res) => downloadZipHandler(req, res));
router.post("/fal-ai/pre-signed-url", (req, res) => preSignedUrlHandler(req, res));
export default router;
