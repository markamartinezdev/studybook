const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = reqiure('./../routes/route');
const route = express.Route();
const app = express();
console.log(routes);
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.use(route);
module.exports = app;
