import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();



//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET ONE
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);

//GET ALL
router.get("/countByCity", countByCity);

//GET ALL
router.get("/countByType", countByType);

//GET ROOM
router.get("/room/:id", getHotelRooms);

export default router;