var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var bodyParser = require('body-parser');
var session = require('express-session');
require('dotenv').config();

module.exports = (app) => {

app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(user, done) {
	  return done(null, user);
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
	  function(accessToken, refreshToken, profile, done) {
	  	   console.log("authenticating", profile.displayName);	
	  	   return done(null, profile);
	       // User.findOrCreate({ googleId: profile.id }, function (err, user) {
	       //   return done(err, user);
	       // });
	  }
	));

	app.get('/auth/google',
		  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }), function(req, res){
		  	console.log('SESSION', res.session);
		  });

	app.get( '/auth/google/callback', 
    	passport.authenticate( 'google', { 
    		successRedirect: '/logged',
    		failureRedirect: '/login'
	}));

	app.get('/islogged', function(req, res){
		console.log(req.user);
		if(req.user){
			res.send(req.user);
		}else{
			res.send("not");
		}
	});
}