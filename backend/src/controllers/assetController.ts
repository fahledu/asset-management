import { Request, Response } from "express";
import { getAssetService } from "../services/assetService";
import { ok } from "../utils/httpHelper";

export const getAsset = async (req: Request, res: Response) => {
    const data = await getAssetService();
    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
} 