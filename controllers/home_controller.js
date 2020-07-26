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
const User = require('../models/users');


module.exports.home = async function(req, res){

    try{
        // following code segment is to populate the user of each post.
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
    
        let users = await User.find({});
    
        return res.render('home',{
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });

    } catch(err){
        console.log('Error', err);
        return;
    }
}