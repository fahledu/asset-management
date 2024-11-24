import express, { Request, Response } from "express";
import { getAsset } from "./controllers/assetController";

function createApp() {

    const app = express();
    app.use(express.json());

    app.get("/", getAsset);
return app;
}


export default createApp;