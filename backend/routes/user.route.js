const express = require("express");
const {
  signup,
  login,
  getUserDataController,
  updateUserController,
  //   getSingleUserDataController,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getClickedUserdata/:userId", getUserDataController);
router.put("/updateProfile/:userId", updateUserController);
// router.post("/getSingleUserData", getSingleUserDataController);

module.exports = router;
