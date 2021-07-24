import Message from "./entitys/message";
import Dispatch from "./entitys/dispatch";
import Agent from "./entitys/agent";

export default async function dispatcher() {
  const messages: Message[] = await Message.find({
    where: {
      done: false,
    },
    order: {
      id: "ASC",
    },
  });

  const sortMessages: Array<Message[]> = new Array<Message[]>();
  messages.forEach((message: Message) => {
    if (!sortMessages[message.divisionId]) {
      sortMessages[message.divisionId] = [];
    }
    sortMessages[message.divisionId].push(message);
  });

  sortMessages.forEach(async (messages: Message[]) => {
    const agents = await Agent.find({
      where: {
        divisionId: messages[0].divisionId,
      },
    });

    if (agents.length > 0) {
      messages.forEach(async (message: Message) => {
        agents.forEach(async (agent: Agent) => {
          const dispatch: Dispatch = Dispatch.create({
            timestamp: Date().split(" ").slice(0, 5).join(" "),
            messageId: message.id as number,
            agentId: agent.id as number,
          });
          await dispatch.save();
        });

        message.done = true;
        await message.save();
      });
    }
  });
}
