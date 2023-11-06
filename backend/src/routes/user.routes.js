import { Router } from "express";
import { validateToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/', validateToken,)
