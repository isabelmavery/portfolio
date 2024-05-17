import "dotenv/config";
import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import cors from "cors";
import sql from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

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
  return users;
}

async function getUserById(id) {
  const users = await sql`
  select *
  from users
  where id = ${id}
`;
  return users;
}

async function createUser({ name, balance }) {
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  await sql`
    INSERT INTO users (id, name, balance, created_at)
    VALUES (${id}, ${name}, ${balance}, ${createdAt})
  `;
  return { id, name, balance, createdAt };
}

async function updateUser(id, body) {
  const { name, balance } = body;
  if (name) {
    await sql`
    UPDATE users SET name = '${name}' WHERE id = ${id};
  `;
  }
  if (balance) {
    await sql`
    UPDATE users SET balance = ${balance} WHERE id = ${id};
  `;
  }
  return { id, name, balance };
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

app.get("/users/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.send(newUser);
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.send(user);
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

export default app;
