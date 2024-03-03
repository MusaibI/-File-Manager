/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const dirname = path.resolve();

/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const homeController = require('../controllers/home_controller');
const fileController = require('../controllers/file_controller');
const upload = multer({ dest: path.join(dirname, 'uploads') })

/** ------------------ MAKING ROUTES ------------------ **/
router.get('/', homeController.home);
router.post('/upload', upload.single('file') ,fileController.upload);
router.get('/view/:id', fileController.view);
router.get('/delete/:id', fileController.delete);


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;
