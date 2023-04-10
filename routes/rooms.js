import express from "express";
const router = express.Router();
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controller/room.js";
import { verifyAdmin } from "../utils/verify.js";

//CREATE
router.post("/:hotelid", createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//UPDATE AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET ONE
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;