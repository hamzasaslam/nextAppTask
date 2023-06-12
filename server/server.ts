const express = require("express");
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const responseData = { message: "Request received successfully" };
    res.status(200).json(responseData);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
