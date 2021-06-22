async function routes(fastify, options) {
    const collection = fastify.mongo.db.collection('blogs')

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/blogs', async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result
    })

    fastify.get('/blogs/:id', async (request, reply) => {
        const { ObjectId } = fastify.mongo
        console.log(ObjectId(request.params.id));
        const result = await collection.findOne({ _id:ObjectId(request.params.id) })
        if (result === null) {
            throw new Error('Invalid value')
        }
        return result
    })
}

module.exports = routes