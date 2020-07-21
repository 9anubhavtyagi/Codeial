const express = require('express');

const port = 8000;

const app = express();


// using express routers
app.use('/', require('./routes/index'));






app.listen(port, function(err){
    if(err){
        // from now we use interpolation
        // nothing new just like string in '' or ""
        // but some variable(which has to be printed) also added...
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});