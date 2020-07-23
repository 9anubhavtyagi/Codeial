
// NOTE --> here during imporing, same instance of express
// is imported as for others files in this web-app.
const express = require('express');

const router = express.Router();


// this router serves all responses for '/users/' kind of requests.
// these responses are written in 'users_controller' in controllers directory.
// that's why we used it
const userController = require('../controllers/users_controller');


// serving response for '/users/profile' with the help of users_controller.
router.get('/profile', userController.profile);

// router.get('/profile2', userController.profile2);



// serving response for '/users/sign-up' with the help of users_controller.
router.get('/sign-up', userController.signUp);

// serving response for '/users/sign-up' with the help of users_controller.
router.get('/sign-in', userController.signIn);


// posting the data to server and creating users with the help of user_controller.
router.post('/create', userController.create);

// exporting this router, so that central-router can use it.
module.exports = router;