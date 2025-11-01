const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const hostRoutes = require("./routes/hostRoutes.js");
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(hostRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
