// The Fellowship gathers at Rivendale.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const tasksRouter = require('./routes/taskrouter');

// The Fellowship of the Ring is formed!
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// The Fellowship leaves Rivendale.
const port = process.env.PORT || 5000;

// The Fellowship is forced to go into the Mines of Moria
app.use('/tasks', tasksRouter);

// Saruman spies on the Fellowship.
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
