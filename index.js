

const fastify = require('fastify')({
    logger: true
})
const fastifyCore = require('fastify-cors')

fastify.register(fastifyCore, {

})

fastify.register(require('./database/mongo'), {
    url: 'mongodb://localhost:27017/',
    useUnifiedTopology: true
})
fastify.register(require('./routes/blog-routes'))

fastify.listen(5000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})