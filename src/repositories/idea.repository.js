// Requires //
const BaseRepository = require('./base.repository')

// Variables //
let _idea = null

// Class //
class IdeaRepository extends BaseRepository {
    constructor({ IdeaModel }) {
        super(IdeaModel)
        _idea = IdeaModel
    }

    async getUserIdeas(author) {
        return await _idea.find({ author })
    }
}

// Exports //
module.exports = IdeaRepository