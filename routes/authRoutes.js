const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);
	app.get(
		// this route is where google will redirect us to after successful login
		// this url is set in the google dashboard
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);
	app.get(
		'/api/logout', 
		(req, res) => {
			req.logout();
			res.redirect('/');
	});
	app.get(
		'/api/current_user', 
		(req, res) => {
			res.send(req.user);
	})
}
