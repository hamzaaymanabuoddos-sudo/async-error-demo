const express = require("express");

const router = express.Router();

const {
    getUser,
    getUsers,
    createUser
} = require("../controllers/userController");

const catchAsync = require("../middlewares/catchAsync");

router.get("/user", catchAsync(getUser));

router.get("/users", catchAsync(getUsers));

router.post("/users", catchAsync(createUser));

module.exports = router;