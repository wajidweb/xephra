const express = require("express");
const router = express.Router();
const { newEvent, postedEvents, deleteEvent, createProfile, getProfile ,updateProfile} = require("../controllers/admin");
const upload = require("../config/multerConfig");


router.post("/newevent", upload.single('image'), newEvent);
router.get("/postedevents", postedEvents);
router.delete('/delete/:id', deleteEvent)
router.post('/createProfile', upload.single('profileImage'), createProfile);  
router.get("/profile/:userId", getProfile);
router.patch('/profile/:userId', upload.single('profileImage'), updateProfile);


module.exports = router;
