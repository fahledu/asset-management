import * as AssetRepository from "../repositories/assetRepository";
import { noContent, ok } from "../utils/httpHelper";

export const getAssetService = async () => {
    let response = null;

    const data = await AssetRepository.findAllAssets();
    
    if (data) {
        response = await ok(data);
    }else{
        response = await noContent()
    }

    return response
}