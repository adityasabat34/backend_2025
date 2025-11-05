const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const hostRoutes = require("./routes/hostRoutes.js");
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/api/hosts", hostRoutes);

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 Not Found</h1>`);
  // next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
