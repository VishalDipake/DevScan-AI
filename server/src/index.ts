import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import scanRoutes from "./routes/scan.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { errorHandler } from "./middleware/error.middleware.js";
import { logger } from "./logger/logger.js";

dotenv.config();
logger.info(`Gemini Key Loaded: ${!!process.env.GEMINI_API_KEY}`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/screenshots",
  express.static(path.join(__dirname, "../screenshots"))
);

app.get("/", (req, res) => {
    res.send("DevLens API is running 🚀");
});

const PORT = process.env.PORT || 5000;



app.use("/api/scan", scanRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
});