import express, { Request, Response } from "express";
import Message from "../entitys/message";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const id: Number = +req.body.divisionId;
    const content: String = req.body.content || "";
    const done: boolean = req.body.done || false;
    console.log(req.body);
    const message = Message.create({
      divisionId: id,
      content: content,
      done: done,
    });
    await message.save();
    res.status(200).json(message);
  } catch (err) {
    console.log(err.code);
    res.status(500);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: Number = +req.params.id;
    const messages: Message[] = await Message.find();
    const message: Message | undefined = messages.find((message: Message) => {
      return message.id === id;
    });
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export = router;
