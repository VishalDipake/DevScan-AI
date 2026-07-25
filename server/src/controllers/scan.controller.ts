import { Request, Response, NextFunction } from "express";
import { scanSchema } from "../validators/scan.validator.js";
import { ScanService } from "../services/scan.service.js";

export class ScanController {
  private readonly scanService = new ScanService();

  public scan = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const payload = scanSchema.parse(req.body);

      const result = await this.scanService.scan(payload);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}