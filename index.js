const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

// requiring db from mongoose.js of config directory.
const db = require('./config/mongoose');

// used for session cookie.
const session = require('express-session');

const passport = require('passport');

// importing our Strategy
const passportLocal = require('./config/passport-local-strategy');

const port = 8000;
const app = express();

app.use(express.urlencoded());

// using cookieParser
app.use(cookieParser());

app.use(express.static('./assets'));


// extracting styles and scripts from css or jss ofsub pages, and put them
// to the layout (with the layout.css linking line in 'layout.ejs' layout)

// for css(styles)
app.set('layout extractStyles', true);

// for js(scripts)
app.set('layout extractScripts', true);



app.use(expressLayouts);


// set-up view engine
app.set('view engine', 'ejs');

// indicating where are views (ejs templates) present.
app.set('views', './views');

// adding a middleware, which takes the session cookie and encrypts it.
app.use(session({
    name: 'Codeial',
    
    // TO-DO LATER before deployment in production mode.
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100) // 100 minutes.
    }
}));

// initialize passport
app.use(passport.initialize());

app.use(passport.session());


// using central express router
app.use('/', require('./routes/index'));





app.listen(port, function(err){
    if(err){
        // from now we use interpolation
        // nothing new just like string in '' or ""
        // but some variable(which has to be printed) can also be added.
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});