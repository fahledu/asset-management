import { AssetModel } from "../models/assetModels";
import * as AssetRepository from "../repositories/assetRepository";
import * as HttpResponse from "../utils/httpHelper";

export const getAssetService = async () => {
    let response = null;

    const data = await AssetRepository.findAllAssets();

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent()
    }

    return response
};

export const getAssetByIdService = async (id: number) => {
    const data = await AssetRepository.findAssetById(id);

    let response = null;

    if (data) {
        response = HttpResponse.ok(data)
    } else {
        response = HttpResponse.noContent()
    }

    return response
}

export const createAssetService = async (asset: AssetModel) => {
    let response = null
    if (Object.keys(asset).length !== 0) {
       await AssetRepository.insertAsset(asset)
        response = HttpResponse.created()
    } else {
        response = HttpResponse.badRequest();
    }

    return response;
}