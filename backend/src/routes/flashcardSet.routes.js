import { Router } from "express";

import { requireAuth } from "../middleware/validateToken.js";
import * as FlashcardSetController from "../controller/flashcardSet.controller.js"

const router = Router();

router.post("/", requireAuth, FlashcardSetController.postNewSet);
router.post("/:setId", requireAuth, FlashcardSetController.postNewCard);
router.get("/", requireAuth, FlashcardSetController.getSetsByUser);
router.get("/:setId", requireAuth, FlashcardSetController.getOneSetBySetId);
router.put("/:setId", requireAuth, FlashcardSetController.updateSetInfo);
router.get("/public/random", FlashcardSetController.getRandomPublicSets);





export default router;