import express, { json, Request, Response } from "express";

const app = express();
const port = process.env.PORT;

app.use(json())

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({asset: "tablet"});
});

app.listen(port, () => {
    console.log(`Server runnig at port: ${port}`)
})