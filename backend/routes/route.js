const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload');

router.post("/addUser", upload.single('img'), userController.addUser);
router.get("/getUser", userController.getUser);
router.get("/getUser/:id",userController.getUserById);
router.delete("/deleteUser/:id", userController.deleteUser);
router.patch("/updateUser/:id", userController.updateUser); 
router.post("/signUsre", adminController.signAdmin);
router.post("/loginUsre", adminController.loginAdmin);

module.exports = router ;