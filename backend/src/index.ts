import "dotenv/config";
import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { connectDB } from "./db.js";
import { toNodeHandler } from "better-auth/node";

// Routes
import perfumeRoutes from "./modules/perfume/perfume.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

// Better Auth
app.all("/api/auth/{*any}", toNodeHandler(auth));

// API Routes
app.use("/api/perfumes", perfumeRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Rosswell Server Running...",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
  });
};

startServer();
