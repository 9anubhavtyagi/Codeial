// first basic response for '/' request.
// module.exports.home = function(req, res){
//     return res.end("<h1> Express is running for Codeial! </h1>");

//     console.log(req.cookies);
//     res.cookie('user_id', 25);

// };


// second basic response for '/' request.
// module.exports.home2 = function(req, res){
//     return res.end("<h1> Second, Express is running for Codeial! </h1>");
// };



const Post = require('../models/post');


module.exports.home = function(req, res){

    // Post.find({}, function(err, posts){
    //     return res.render('home',{
    //         title: "Codeial | Home",
    //         heading: "Codeial Home Wall",
    //         posts: posts
    //     });
    // });


    // following code is to populate the user of each post.
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        return res.render('home',{
            title: "Codeial | Home",
            heading: "Codeial Home Wall",
            posts: posts
        });
    });
}