const User = require("../models/User");

// get users
module.exports.getUsers = async (req, res) => {
    try {
        // get users
        const users = await User.find();

        if (!users) {
            // return message with status 404 if no users found
            return res
                .status(404)
                .json({ message: "no users found, Please create user" });
        }

        return res.status(200).json(users);
    } catch (error) {
        // internal server error

        console.error(`Get Users Error: ${error}`);
        return res.status(200).json({ message: "internal server error!" });
    }
};

// create user
module.exports.createUser = async (req, res) => {
    try {
        // check if user exist with same email
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        // return if user exists
        if (user) {
            return res
                .status(403)
                .json({ message: "user already exists with this email" });
        }

        // create user
        const newUser = await User.create(req.body);

        return res.status(201).json(newUser);
    } catch (error) {
        // internal server error

        console.error(`Get Users Error: ${error}`);
        return res.status(200).json({ message: "internal server error!" });
    }
};

// get user by email
module.exports.getUser = async (req, res) => {
    try {
        // get email from query params
        const email = req.query.email;
        
        // find user
        const user = await User.findOne({email: email});

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error while getting user: " + error);
        return res.status(500).json({message: "Internal server error"});
    }
}
