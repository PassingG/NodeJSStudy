import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllCat,
  readPartialCat,
  updateAllCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readAllCat);
router.get("/cats/:id", readPartialCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateAllCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;
