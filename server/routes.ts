import app from "./index";

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/users", (req, res) => {
  res.send("Create user");
});

app.get("/users", (req, res) => {
  res.send("Get users");
});

// messages
app.get("/chat-messages", (req, res) => {
  res.send("Get messages");
});
app.get("/user/:userId/chat-messages", (req, res) => {
  res.send("Get user messages");
});
// cafe
app.get("/user/:userId/balance", (req, res) => {
  res.send("Get user balance");
});
app.get("/user/:userId/past-orders", (req, res) => {
  res.send("Get user past orders");
});
// game
app.get("/user/:userId/game/:gameId/score", (req, res) => {
  res.send("Get user score for game");
});
// game + add filters, plu
app.get("/user/:userId/games", (req, res) => {
  res.send("Get all games for user");
});
app.get("/user/:userId/scores", (req, res) => {
  res.send("Get all games for user");
});
