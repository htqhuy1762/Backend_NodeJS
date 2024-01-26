const express = require('express');
const {
    getHomepage,
    getABC,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
} = require('../controllers/homeController');
const router = express.Router();

// Route definition
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router; // export default
