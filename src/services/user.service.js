// Requires //
const BaseService = require('./base.service')

// Variables //
let _userRepository = null

// Class //
class UserService extends BaseService {
    constructor({ UserRepository }) {
        super(UserRepository)
        _userRepository = UserRepository
    }

    async getUserByUsername(username) {
        return await _userRepository.getUserByUsername(username)
    }
}

// Exports //
module.exports = UserService