const express = require('express');
const router = express.Router();
const rentController = require('../controller/rentController');

router.get('/',rentController.homepage);
router.get('/about',rentController.aboutPage);
router.get('/property',rentController.exploreProperty);
router.get('/details/:id',rentController.exploreDetails);
router.get('/submit',rentController.submit);
router.post('/submit', rentController.submitOnPost);
router.get('/update',rentController.update);
router.patch('/update', rentController.updateOnPatch);
router.get('/login',rentController.login);
router.post('/login',rentController.check);
router.get('/signup',rentController.SignUp)
router.post('/signup',rentController.SignUpPost);

module.exports=router;
