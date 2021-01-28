// Requires //
const BaseService = require('./base.service')

// Variables //
let _ideaRepository = null

// Class //
class IdeaService extends BaseService {
    constructor({ IdeaRepository }) {
        super(IdeaRepository)
        _ideaRepository = IdeaRepository
    }

    async getUserideas(author) {
        if(!author) {
            const error = new Error()
            error.status = 400
            error.message = 'UserId must be sent'
            throw error
        }
        return await _ideaRepository.getUserideas(author)
    }

    async upvoteIdea(ideaId) {
        if(!ideaId) {
            const error = new Error()
            error.status = 400
            error.message = 'IdeaId must be sent'
            throw error
        }

        const idea = await _ideaRepository.get(ideaId)
        if(!idea) {
            const error = new Error()
            error.status = 404
            error.message = 'Idea does ot exist'
            throw error
        }
        idea.upvotes.push(true)
        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes })
    }

    async downvoteIdea(ideaId) {
        if(!ideaId) {
            const error = new Error()
            error.status = 400
            error.message = 'IdeaId must be sent'
            throw error
        }

        const idea = await _ideaRepository.get(ideaId)
        if(!idea) {
            const error = new Error()
            error.status = 404
            error.message = 'Idea does ot exist'
            throw error
        }
        idea.downvoteIdea.push(true)
        return await _ideaRepository.update(ideaId, { downvotes: idea.downvoteIdea })
    }
}

// Exports //
module.exports = IdeaService