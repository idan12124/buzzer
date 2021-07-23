import express, { Request, Response } from "express";
import Division from "../entitys/division";
import DivisionEntity from "../entitys/division";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const divisions = await DivisionEntity.find();
    res.status(200).json(divisions);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: Number = +req.params.id;
    const divisions: DivisionEntity[] = await DivisionEntity.find();
    const division: DivisionEntity | undefined = divisions.find(
      (division: DivisionEntity) => {
        return division.id === id;
      }
    );
    console.log(division);
    res.status(200).json(division);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const dvision = DivisionEntity.create();
    await dvision.save();
    res.status(200).json(dvision);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export = router;
