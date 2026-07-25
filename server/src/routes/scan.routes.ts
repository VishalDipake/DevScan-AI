import { Router } from "express";
import { ScanController } from "../controllers/scan.controller.js";

const router = Router();
const scanController = new ScanController();

router.post("/", scanController.scan);

export default router;