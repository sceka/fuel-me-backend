import { Router } from "express";
import personRoutes from "./routes/personRoutes";
const router = Router();

router.use("/person", personRoutes);

export default router;
