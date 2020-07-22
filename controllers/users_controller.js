
// first basic response for '/users/profile' request.
module.exports.profile = function(req, res){
    // res.end('<h1> User Profile </h1>');
    return res.render('users_profile',{
        title: "Codeial profiles",
        name: "User Name"
    });
};

// module.exports.profile2 = function(req, res){
//     res.end('<h1> User Profile -2 </h1>');
// };


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
};

// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
};


// get the sign up data
module.exports.create = function(req, res){
    // TO DO Later
};


// get the sign in data and create a session for user
module.exports.createSession = function(req, res){
    // TO DO Later
};