// Requires //
const BaseRepository = require('./base.repository')

// Variables //
let _user = null

// Class //
class UserRepository extends BaseRepository {
    constructor({ UserModel }) {
        super(UserModel)
        _user = UserModel
    }

    async getUserByUsername(username) {
        return await _user.findOne({ username })
    }
}

// Exports //
module.exports = UserRepository