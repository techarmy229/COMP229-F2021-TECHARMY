let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET add survey page. */
router.get('/add', indexController.displayAddSurveyPage);

/* process add survey page. */
router.post('/add', indexController.processAddSurvey);

/* GET edit survey page. */
router.get('/edit/:id', indexController.displayEditSurveyPage);

/* GET route for deleting a survey. */
router.get('/delete/:id',indexController.deleteSurvey)

//--------------------------------------------------------------add Tom's
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* GET Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* GET Route for displaying the Register page */
router.post('/register', indexController.processAddPage);

/* GET to perform UserLogout operation */
router.get('/logout', indexController.performLogout);

module.exports = router;
