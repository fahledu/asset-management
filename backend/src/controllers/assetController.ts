import { Request, Response } from "express";
import { getAssetService } from "../services/assetService";

export const getAsset = async (req: Request, res: Response) => {
    const HttpResponse = await getAssetService();
      
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
} 