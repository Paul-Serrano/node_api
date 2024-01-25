const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const os = require("os");
app.use(express.json);

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/infos", (req, res) => {
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
    arch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    networkInterfaces: os.networkInterfaces(),
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
