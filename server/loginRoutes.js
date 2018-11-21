var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var session = require('express-session');
var md5 = require('md5');
require('dotenv').config();
const controller = require('../controllers/controller');

module.exports = (app) => {

	app.use(session({
		secret: "cats",
		saveUninitialized: true,
		resave: true
	}));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function (user, done) {
		console.log("User Serialize", user.id);
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		return done(null, id);
	});
	// Use the GoogleStrategy within Passport.
	//   Strategies in Passport require a `verify` function, which accept
	//   credentials (in this case, an accessToken, refreshToken, and Google
	//   profile), and invoke a callback with a user object.
	passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_SECRET,
		clientSecret: process.env.GOOGLE_CLIENT_ID,
		callbackURL: "http://localhost:3000/auth/google/callback"
	},
		function (accessToken, refreshToken, profile, done) {
			console.log("authenticating", profile.displayName);
			return done(null, profile);
			// User.findOrCreate({ googleId: profile.id }, function (err, user) {
			//   return done(err, user);
			// });
		}
	));

	passport.use(new LocalStrategy(
		function (username, password, done) {
			controller.login(username, password)
				.then(function (result) {
					if (md5(password) === result[0].password) {
						var user = {
							username: result[0].username,
							id: result[0].id,
						}
						return done(null, user);
					} else {
						done(null, false, { message: 'Incorrect username or password' });
					}
				})
				.catch(err => done(err));
		})
	);

	app.get('/auth/google',
		passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }), function (req, res) {
			console.log('SESSION', res.session);
		});

	app.get('/auth/google/callback',
		passport.authenticate('google', {
			successRedirect: '/logged',
			failureRedirect: '/login_err'
		}));

	app.get('/islogged', function (req, res) {
		console.log(req.user);
		if (req.user) {
			res.send(req.user);
		} else {
			res.send("not");
		}
	});

	app.post('/login', function (req, res, next) {
		passport.authenticate('local', function (error, user, info) {
			if (error) {
				return res.status(500).json(error);
			}
			if (!user) {
				return res.status(401).json(info.message);
			}
			res.json(user);
		})(req, res, next);
	});

	app.post('/logout', function (req, res, next) {
		req.logout();
		if(!req.user){
			res.send("ok");
		}else{
			res.status(500).send("Error logging out, try again!");
		}
	});

}