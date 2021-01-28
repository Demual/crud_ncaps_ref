// Requires //
const { Router } = require('express')
const { AuthMiddlweare, ParseIntMiddleware, CacheMiddleware } = require('../middlewares')
const { CACHE_TIME } = require('../helpers')

// Exports //
module.exports = function({ UserController }) {
    const router = Router()

    // router.get('', UserController.getAll) // Sin protección
    router.get('', [AuthMiddlweare, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], UserController.getAll) // Protegido con el TOKEN
    router.get('/:userId', UserController.get)
    router.patch('/:userId', UserController.update)
    router.delete('/:userId', UserController.delete)
    
    return router
}