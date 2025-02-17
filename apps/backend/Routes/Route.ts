import { Router } from "express";
import { generateImageHandler, getImagesHandler, TrainModelHandler } from "../Controller/controller";

const router = Router();

router.post("/train", (req, res) => TrainModelHandler(req, res));
router.post("/generate", (req, res) => generateImageHandler(req, res));
router.get("/images", (req, res) => getImagesHandler(req, res));

export default router;
