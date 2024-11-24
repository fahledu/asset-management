import express, { Request, Response } from "express";
import router from "./routs";

function createApp() {

    const app = express();
    app.use(express.json());

    app.use("/api", router)
    return app;
}


export default createApp;