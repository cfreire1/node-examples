const apisDemosRouter = require('./apisDemos')

function routerApi(app) {
    app.use('/demosapi',apisDemosRouter);
}

module.exports = routerApi;