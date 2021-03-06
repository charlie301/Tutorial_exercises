/**
 * @summary: Signup logic for authentication route
 */

//Modules required for authentication route
const User = require('../database/models/user');
const jwt = require('jwt-simple');
const config = require('../config');


//
// Handle authentication login
//
exports.signup = (req,res,next) => {

	//Store username and password
	const { email, password } = req.body;

	//Check for presence of both email and password
	if(!email || !password){
		res.status(422).json({ message: "Email and password are required" })
	}

	//Check whether user exists and either return error
	//or create new user
	User.findOne({ email: email }, (err,existingUser) => {

		//Return on error or existing user
		if(err){ return next(err); }
		if(existingUser){ return res.status(422).send({ message: "User email already exists" }); }

		//create new user and save to mongoDB
		const user = new User({
			email,
			password
		});

		//Save user to the DB
		user.save((err)=> {
			if(err){ return next(err); }
			res.json({
				message: user.id,
				token: tokenForUser(user)
			});
		});
	});
}//end of signup logic


//
// Handle user sign in logic
//
exports.signin = (req,res,next) => {

	//Return generated token for user generated by passport in
	//the done() method and added to req object as req.user
	res.send({ token: tokenForUser(req.user) })

}

//Return encoded version
function tokenForUser(user){
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret)
}
