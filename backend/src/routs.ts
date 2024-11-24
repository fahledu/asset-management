import { Router } from "express";
import * as AssetController from "./controllers/assetController";

const router = Router();

router.get("/assets", AssetController.getAsset);
router.get("/assets/:id", AssetController.getAssetById);

export default router;