// first basic response for '/users/profile' request.
module.exports.profile = function(req, res){
    res.end('<h1> User Profile </h1>');
};

// module.exports.profile2 = function(req, res){
//     res.end('<h1> User Profile -2 </h1>');
// };