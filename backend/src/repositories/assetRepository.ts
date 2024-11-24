import { AssetModel } from "../models/assetModels";


const database: AssetModel[] = [
    { id: 1, name: "tablet" },
    { id: 2, name: "impressora" }
];

export const findAllAssets = async (): Promise<AssetModel[]> => {
    return database;
};

export const findAssetById = async (id: number): Promise<AssetModel | undefined> => {
    return database.find(asset => asset.id === id )
}