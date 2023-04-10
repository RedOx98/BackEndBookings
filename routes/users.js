import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";
const router = express.Router();



// router.get("/checkauthentication", verifyToken, (req, res, next)=> {
//     res.json("hello user. you are authenticated!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
//     res.json("hello user. you are authenticated and you can delete your account!")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=> {
//     res.json("hello admin. you are authenticated and you can delete all accounts!")
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", deleteUser)

//GET ONE
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", getUsers);


export default router;