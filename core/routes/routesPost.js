exports.initPost = initPost;

const controllersPost = require('../controllers/controllersPost');

function initPost(app){
    app.post('/getTiposPatrimonios', controllersPost.getTiposPatrimonios);
}