import { Request, Response } from "express";
import * as service from "../services/assetService";

export const getAsset = async (req: Request, res: Response) => {
    const HttpResponse = await service.getAssetService();

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getAssetById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await service.getAssetByIdService(id)

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}