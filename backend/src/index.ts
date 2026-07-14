import "dotenv/config";
import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { connectDB } from "./db.js";
import { toNodeHandler } from "better-auth/node";

// Routes
import perfumeRoutes from "./modules/perfume/perfume.route.js";

const app = express();

// Ensure DB connects on requests (for Serverless)
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

// Better Auth Route
app.all("/api/auth/*splat", toNodeHandler(auth));

// API Routes
app.use("/api/perfumes", perfumeRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Rosswell Server Running...",
  });
});

// Local Development Engine
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
  });
}

// Export for Vercel Serverless
export default app;
