var router = require('express').Router();
var buildsCtrl = require('../controllers/builds');

router.get('/builds', buildsCtrl.index);
router.get('/builds/new', isLoggedIn, buildsCtrl.new);
router.post('/builds', isLoggedIn, buildsCtrl.create);
router.get('/builds/:id', buildsCtrl.show);


// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware, above situation studentsCtrl.addFact
	res.redirect('/auth/google'); // redirect them to login
}



module.exports = router;
