const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');


// Authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // fina a user and establish the identity
        User.findOne({email: email}, function(err, user){
            if(err){
                console.log('Error in finding user --> Passport.js');
                return done(err);
            }

            // if there is no user with given email or password mismatch
            if(!user || user.password != password){
                console.log('Invalid UserName/PassWord');
                return done(null, false);
            }

            return done(null, user);
        });
    }

));



// Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});


// De-serializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport.js');
            return done(err);
        }

        return done(null, user);
    });
});


// exporting Strategy to use
module.exports = passport;