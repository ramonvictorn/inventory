exports.initPost = initPost;

const controllersPost = require('../controllers/controllersPost');

function initPost(app){
    app.post('/getTiposPatrimonios', controllersPost.getTiposPatrimonios);

    app.post('/getResponsaveisUfsc' , controllersPost.getResponsaveisUfsc);

    app.post('/getLocais', controllersPost.getGetLocais);
}