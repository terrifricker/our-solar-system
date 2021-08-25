const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3200;

app.use(cors({ origin: "*" }));
app.use("/resources", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
