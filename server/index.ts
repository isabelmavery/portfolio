import "dotenv/config";
import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import cors from "cors";
import routes from "./routes/index.ts";

declare class CustomWebSocket extends WebSocket {
  uid: string;
}

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
  routes(app);
});

const wsServer = new WebSocketServer<typeof CustomWebSocket>({
  server: httpServer,
});

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

wsServer.on("connection", function connection(ws: CustomWebSocket) {
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
    console.log("disconnnected from ws");

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

export default app;
