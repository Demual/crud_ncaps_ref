// Requires //
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')

// Requires page Errors //
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares')

// Exports //
module.exports = function({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes }) {
    const router = express.Router()
    const apiRoutes = express.Router()

    // Config middlewares //
    apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors())
    .use(morgan('dev'))
    .use(helmet())
    .use(compression())
    
    // Use routes //
    apiRoutes
    .use('/home', HomeRoutes)
    .use('/user', UserRoutes)
    .use('/idea', IdeaRoutes)
    .use('/comment', CommentRoutes)
    .use('/auth', AuthRoutes)

    router
    .use('/v1/api', apiRoutes)
    .use(NotFoundMiddleware)
    .use(ErrorMiddleware)

    return router
}