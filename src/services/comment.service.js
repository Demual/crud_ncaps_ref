// Requires //
const BaseService = require('./base.service')

// Variables //
let _commentRepository = null
let _ideaRepository = null

// Class //
class CommentService extends BaseService {
    constructor({ CommentRepository, IdeaRepository }) {
        super(CommentRepository)
        _commentRepository = CommentRepository
        _ideaRepository = IdeaRepository
    }

    async getIdeaComments(ideaId) {
        if(!ideaId) {
            const error = new Error()
            error.status = 400
            error.message = 'UserId must be sent'
            throw error
        }

        const idea = await _ideaRepository.getI(ideaId)
        if(!idea) {
            const error = new Error()
            error.status = 404
            error.message = 'Idea does ot exist'
            throw error
        }

        const { comments } = idea
        return comments
    }

    async createComment(comment, ideaId, userId) {
        if(!ideaId) {
            const error = new Error()
            error.status = 400
            error.message = 'UserId must be sent'
            throw error
        }

        const idea = await _ideaRepository.getI(ideaId)
        if(!idea) {
            const error = new Error()
            error.status = 404
            error.message = 'Idea does ot exist'
            throw error
        }

        const createdComment = await _commentRepository.create({ ...comment, author: userId })
        idea.comments.push(createdComment)
        return await _ideaRepository.update(ideaId, { comments: idea.comments })
    }
}

// Exports //
module.exports = CommentService