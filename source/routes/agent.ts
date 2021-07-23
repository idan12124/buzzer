import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("test");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("test2");
});

router.post("/", (req: Request, res: Response) => {
  res.send("test2");
});

export = router;
