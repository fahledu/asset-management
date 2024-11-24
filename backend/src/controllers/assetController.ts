import { Request, Response } from "express";
import { getAssetService } from "../services/assetService";

export const getAsset = async (req: Request, res: Response) => {
    const data = await getAssetService();
    res.status(200).json(data);
} 