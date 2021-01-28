// Requires //
const BaseRepository = require('./base.repository')

// Variables //
let _comment = null

// Class //
class CommentRepository extends BaseRepository {
    constructor({ CommentModel }) {
        super(CommentModel)
        _comment = CommentModel
    }
}

// Exports //
module.exports = CommentRepository