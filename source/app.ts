import express, { Request, Response } from "express";
import messages_route from "./routes/messages";
import division_route from "./routes/division";
import agent_route from "./routes/agent";
import dispatch_route from "./routes/dispatch";
import { createConnection } from "typeorm";
import division from "./entitys/division";
import Agent from "./entitys/agent";
import Message from "./entitys/message";
import Dispatch from "./entitys/dispatch";
import dispatcher from "./dispatcher";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/message", messages_route);
app.use("/agent", agent_route);
app.use("/dispatch", dispatch_route);
app.use("/division", division_route);

createConnection({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  ssl: true,
  entities: [division, Agent, Message, Dispatch],
}).then(() => {
  app.listen(PORT, async () => {
    setInterval(await dispatcher, 900000);
  });
});
