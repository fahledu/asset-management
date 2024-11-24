import { AssetModel } from "../models/assetModels";


const database: AssetModel[] = [
    { id: 1, name: "tablet", qrcode: "link", created: "2024-12-12T10:30:00Z", status: true,  technician: "robson", last_update: "2024-12-12T10:30:00Z"},
    { id: 2, name: "impressora", qrcode: "link", created: "2024-12-12T10:30:00Z", status: true,  technician: "robson", last_update: "2024-12-12T10:30:00Z" }
];

export const findAllAssets = async (): Promise<AssetModel[]> => {
    return database;
};

export const findAssetById = async (id: number): Promise<AssetModel | undefined> => {
    return database.find(asset => asset.id === id )
}