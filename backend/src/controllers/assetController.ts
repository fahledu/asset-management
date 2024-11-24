import { Request, Response } from "express";
import * as service from "../services/assetService";
import { noContent } from "../utils/httpHelper";

export const getAsset = async (req: Request, res: Response) => {
    const HttpResponse = await service.getAssetService();

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getAssetById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await service.getAssetByIdService(id);

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const postAsset = async (req: Request, res: Response) => {
    const bodyValue = await req.body;
    const HttpResponse = await service.createAssetService(bodyValue);

    if (HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    }
}