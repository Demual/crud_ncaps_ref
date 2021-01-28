// Requires //
const container = require('./src/startup/container')
const server = container.resolve('server')
const { MONGO_URI } = container.resolve('config')

// Mongoose //
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
.then(() => console.log('Database connected!!'), server.start())
.catch(console.log)