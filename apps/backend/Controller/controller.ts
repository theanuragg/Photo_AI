import { Router, type Request, type Response } from "express";
import { Trainingmodel, GenerateImage } from "common/index";
import { prismaClient } from "db";
import { FalAiModel } from "../model/FalAiModel";

const USER_ID = "123";
const falAiModel = new FalAiModel();

export const TrainModelHandler = async (req: Request, res: Response): Promise<void>=> {
  try {
    const parsedbody = Trainingmodel.safeParse(req.body);
    if (!parsedbody.success) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }
    const {request_id, response_url} = await falAiModel.trainModel("", parsedbody.data.name)

    const model = await prismaClient.models.create({
      data: {
        name: parsedbody.data.name,
        type: parsedbody.data.type,
        age: parsedbody.data.age,
        ethnicity: parsedbody.data.ethnicity,
        eye: parsedbody.data.eye,
        bold: parsedbody.data.bold,
        userId: USER_ID,
        falAiRequestId: request_id
      },
    });

    res.json({ modelId: model.id });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const generateImageHandler = async (req: Request, res: Response): Promise<void> => {
  const parsedbody = GenerateImage.safeParse(req.body);
  try {
    if (!parsedbody.success) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }

    const {request_id, response_url} = await falAiModel.generateImage(parsedbody.data.prompt, parsedbody.data.modelId)
    
    const data = await prismaClient.outputImage.create({
      data: {
        imageUrl: response_url,
        status: "Pending",
        prompt: parsedbody.data.prompt,
        userId: USER_ID,
        modelId: parsedbody.data.modelId,
        falAiRequestId: request_id
      },
    });

    res.json({ imageId: data.id });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getImagesHandler = async (req: Request, res: Response): Promise<void> => {
  const ids = req.query.ids as string[];
  const limit = req.query.limit as string ?? "10";
  const offset = req.query.offset as string ?? "0";

  try {
    const data = await prismaClient.outputImage.findMany({
      where: {
        id: { in: ids },
        userId: USER_ID,
      },
      skip: parseInt(offset),
      take: parseInt(limit),
    });

    res.json({ image: data });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



export const webhookHandler = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Webhook received" });

  const requestId = req.body.request_id
   await prismaClient.models.updateMany({
    where: {
     falAiRequestId: requestId
    },
    data: {
      trainingStatus: "Completed",
      tensorPath: req.body.output.tensorPath,
    }
   })

}

export const webhookHandlerTrain = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Webhook received" });
  const requestId = req.body.request_id
   await prismaClient.models.updateMany({
    where: {
      falAiRequestId: requestId
    },
    data: {
     trainingStatus: "Completed",
     tensorPath: req.body.output.tensorPath
    }
   })
    res.json({ message: "Webhook received" });
}
