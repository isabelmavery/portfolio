import "dotenv/config";
import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import cors from "cors";
import sql from "./db.js";

const app = express();
app.use(cors());

const httpServer = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
});

const wsServer = new WebSocketServer({ server: httpServer });

// Broadcast updates to all connected / subscribed clients
const updateClients = ({ ws, clients, update, includeSelf }) => {
  for (let client of clients) {
    if (
      client.readyState === WebSocket.OPEN &&
      (includeSelf || client !== ws)
    ) {
      client.send(update);
    }
  }
};

wsServer.on("connection", function connection(ws) {
  ws.uid = crypto.randomUUID();
  ws.send(JSON.stringify({ type: "uid", uid: ws.uid }));

  updateClients({
    ws,
    clients: wsServer.clients,
    update: JSON.stringify({
      type: "clients",
      data: { id: 1, value: [...wsServer.clients].map((cli) => cli.uid) },
    }),
    includeSelf: true,
  });

  // on a message event
  ws.on("message", (msgData) => {
    updateClients({
      ws,
      clients: wsServer.clients,
      update: msgData.toString(),
      includeSelf: false,
    });
  });

  ws.on("close", () => {
    console.log("disconnnected");

    updateClients({
      ws,
      clients: wsServer.clients,
      update: JSON.stringify({
        type: "clients",
        data: { id: 1, value: [...wsServer.clients].map((cli) => cli.uid) },
      }),
      includeSelf: true,
    });
  });
});

async function getUsers() {
  const users = await sql`
    select *
    from users
  `;
  console.log("users from db", users);
  return users;
}

/** Routes*/

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

export default app;
