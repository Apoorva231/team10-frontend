const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const {isActiveRoute} = require('./server/helpers/routeHelpers');
const app = express();
const expressLayout = expressEjsLayouts;
const PORT = 3000;

app.use(express.static('public'));
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.locals.isActiveRoute = isActiveRoute;
app.use('/', require('./server/routes/main'));

app.listen(PORT, (req,res) =>
{
    console.log("App listening on port: " + PORT)
})