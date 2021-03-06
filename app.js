const express = require('express');
const app = express();
const routes = require('./core/routes/routes.js');
const routesPost = require('./core/routes/routesPost.js')
const ejs = require('ejs');
// //seta o caminho especifico para os html's dinamicos
app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);
// //permitir acesso ao Js e css
app.use('/static', express.static('web/'));
// //finish2



routes.init(app); // routes.js needs the app object in order to route
routesPost.initPost(app);

app.listen(8080);