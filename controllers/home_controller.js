// first basic response for '/' request.
module.exports.home = function(req, res){
    return res.end("<h1> Express is running for Codeial! </h1>");
};

// module.exports.home2 = function(req, res){
//     return res.end("<h1> Second, Express is running for Codeial! </h1>");
// };