import express, { Request, Response } from "express";
import Dispatch from "../entitys/dispatch";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const dispatch = await Dispatch.find();
    res.status(200).json(dispatch);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export = router;
