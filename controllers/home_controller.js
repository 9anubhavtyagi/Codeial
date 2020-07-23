// first basic response for '/' request.
module.exports.home = function(req, res){
    // return res.end("<h1> Express is running for Codeial! </h1>");
    console.log(req.cookies);

    res.cookie('user_id', 25)
    return res.render('home',
    {
        title: "Home of Codeial",
        heading: "Codeial"
    });
};

// module.exports.home2 = function(req, res){
//     return res.end("<h1> Second, Express is running for Codeial! </h1>");
// };