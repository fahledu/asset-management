import { noContent, ok } from "../utils/httpHelper";

export const getAssetService = async () => {
    let response = null;

    const data = { asset: "impressora" };
    
    if (data) {
        response = await ok(data);
    }else{
        response = await noContent()
    }

    return response
}