import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import scanRoutes from "./routes/scan.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("DevLens API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.use("/api/scan", scanRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});