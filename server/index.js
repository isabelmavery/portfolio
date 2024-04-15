import WebSocket, { WebSocketServer } from "ws";
const wsServer = new WebSocketServer({ port: 5001 });

console.log("Server initialized");

// broadcast update to all connected / subscribed clients
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
