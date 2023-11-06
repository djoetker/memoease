import { Router } from "express";

import { requireAuth } from "../middleware/validateToken.js";
import * as FlashcardSetController from "../controller/flashcardSet.controller.js"

const router = Router();

router.post("/", requireAuth, FlashcardSetController.postNewSet);


export default router;