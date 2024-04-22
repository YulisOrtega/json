import { Router } from "express";
import {getAll, getOne, insertOne} from "../controllers/products.controller.js";
const router=Router();
router.get('/',getAll)
router.get('/:barcode',getOne);
router.post('/',insertOne);
export default router

