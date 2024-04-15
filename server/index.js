import WebSocket, { WebSocketServer } from "ws";
const wsServer = new WebSocketServer({ port: 5001 });

console.log("Server initialized");

wsServer.on("connection", function connection(ws) {
  ws.send(
    JSON.stringify({
      type: "count",
      data: { id: 1, value: wsServer.clients.size },
    })
  );

  // on a message event
  ws.on("message", (msgData) => {
    // broadcast message to all connected clients
    wsServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        // check if client is ready
        console.log("client connected", client);
        client.send(msgData.toString());
      }
    });
  });
});
