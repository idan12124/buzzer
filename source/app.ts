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

app.use(express.json());
app.use("/message", messages_route);
app.use("/agent", agent_route);
app.use("/dispatch", dispatch_route);
app.use("/division", division_route);

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "abc123",
  database: "test",
  logging: true,
  synchronize: true,
  entities: [division, Agent, Message, Dispatch],
}).then(() => {
  app.listen(5000, async () => {
    console.log("listeen on port 5000");
    setInterval(await dispatcher, 900000);
  });
});
