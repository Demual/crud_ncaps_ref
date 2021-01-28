// Requires //
const { Router } = require('express')

// Exports //
module.exports = ({ HomeController }) => {
    const router = Router()

    router.get('/', HomeController.index)
    
    return router
}