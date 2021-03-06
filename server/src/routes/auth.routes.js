const { Router } = require('express');
const { signup, signin } = require("../controllers/auth.controller");
const checkDuplicate = require("../middlewares/checkDuplicate");

const router = Router();

router.post('/signup', checkDuplicate ,signup)
router.post('/signin', signin)

module.exports = router;