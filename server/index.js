const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(bodyParser.json());

const MAX_ATTENDANTS = 3;
const MAX_SIMULTANEOUS_ATTENDANCES = 3;

const teams = {
  Cartões: {
    attendants: Array(MAX_ATTENDANTS).fill(null),
    queue: [],
  },
  Empréstimos: {
    attendants: Array(MAX_ATTENDANTS).fill(null),
    queue: [],
  },
  Outros: {
    attendants: Array(MAX_ATTENDANTS).fill(null),
    queue: [],
  },
};

function distributeRequest(type, client) {
  const team = teams[type];
  if (!team) return { error: `Invalid request type: ${type}` };

  const freeIndex = team.attendants.findIndex(
    (attendances) =>
      attendances === null || attendances.length < MAX_SIMULTANEOUS_ATTENDANCES
  );

  if (freeIndex !== -1) {
    if (!team.attendants[freeIndex]) team.attendants[freeIndex] = [];
    team.attendants[freeIndex].push(client);
  } else {
    team.queue.push(client);
  }
}

app.post("/add", (req, res) => {
  const { type, client } = req.body;

  if (!type || !client) {
    return res.status(400).json({ error: "Type and client are required." });
  }

  const result = distributeRequest(type, client);

  if (result?.error) {
    return res.status(400).json(result);
  }

  res
    .status(200)
    .json({ message: `Request from ${client} added to the ${type} team.` });
});

app.get("/status", (req, res) => {
  const status = {};

  for (const [type, { attendants, queue }] of Object.entries(teams)) {
    status[type] = {
      attendants: attendants.map((clients, index) => ({
        id: index + 1,
        clients: clients || [],
      })),
      queue,
    };
  }

  res.status(200).json(status);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
