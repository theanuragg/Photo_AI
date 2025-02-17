import { Router, type Request, type Response } from "express";
import { Trainingmodel, GenerateImage } from "common/index";
import { prismaClient } from "db";

const USER_ID = "123";

export const TrainModelHandler = async (req: Request, res: Response): Promise<void>=> {
  try {
    const parsedbody = Trainingmodel.safeParse(req.body);
    if (!parsedbody.success) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }

    const model = await prismaClient.models.create({
      data: {
        name: parsedbody.data.name,
        type: parsedbody.data.type,
        age: parsedbody.data.age,
        ethnicity: parsedbody.data.ethnicity,
        eye: parsedbody.data.eye,
        bold: parsedbody.data.bold,
        imageUrl: parsedbody.data.imageUrl,
        userId: USER_ID,
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

    const data = await prismaClient.outputImage.create({
      data: {
        imageUrl: "https://picsum.photos/200/300",
        status: "Pending",
        prompt: parsedbody.data.prompt,
        userId: USER_ID,
        modelId: parsedbody.data.modelId,
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


