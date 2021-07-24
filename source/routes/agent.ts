import express, { Request, Response } from "express";
import Agent from "../entitys/agent";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const agetns = await Agent.find();
    res.status(200).json(agetns);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const id: Number = +req.body.id;
    const agent = Agent.create({ divisionID: id });
    await agent.save();
    res.status(200).json(agent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: Number = +req.params.id;
    const agents: Agent[] = await Agent.find();
    const agent: Agent | undefined = agents.find((agent: Agent) => {
      return agent.id === id;
    });
    res.status(200).json(agent);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export = router;
