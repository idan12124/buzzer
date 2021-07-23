import express, { Request, Response } from "express";
import messages_route from "./routes/messages";
import division_route from "./routes/dispatch";
import agent_route from "./routes/dispatch";
import dispatch_route from "./routes/dispatch";

const app = express();


app.use(express.json())
app.use("/messages", messages_route);
app.use("/agent", agent_route);
app.use("/dispatch", dispatch_route);
app.use("/division", division_route);

app.listen(5000, () => {
  console.log("listeen on port 5000");
});
