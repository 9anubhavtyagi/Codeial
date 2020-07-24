
// response for '/posts' type of request.
// module.exports.usersPost = function(req, res){
//     return res.end("<h1> Post Controller and it's router implemented </h1>");
// }

const Post = require('../models/post');


module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){console.log('Error in creating post'); return;}

        return res.redirect('back');
    });
}