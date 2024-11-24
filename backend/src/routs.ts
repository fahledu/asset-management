import { Router } from "express";
import { getAsset } from "./controllers/assetController";

const router = Router();

router.get("/assets", getAsset);

export default router;