// Requires //
const { Router } = require('express')
const { AuthMiddlweare } = require('../middlewares')

// Exports //
module.exports = ({ CommentController }) => {
    const router = Router()

    router.get('/:commentId/unique', CommentController.get)
    router.get('/:ideaId', CommentController.getIdeaComments)
    router.post('/:ideaId', AuthMiddlweare, CommentController.createComment)
    router.patch('/:commentId', AuthMiddlweare, CommentController.update)
    router.delete('/:commentId', AuthMiddlweare, CommentController.delete)
    
    return router
}