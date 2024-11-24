import { Request, Response } from "express";

export const getAsset = (req: Request, res: Response) => {
    res.status(200).json({ asset: "impressora" });
}