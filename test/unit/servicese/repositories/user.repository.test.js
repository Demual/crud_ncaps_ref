// Requires //
const { UserRepository } = require('../../../../src/repositories')
const mockingoose = require('mockingoose').default
const { UserModel } = require('../../../../src/models')
let { UserModelMock: { user, users } } = require('../../../mocks')

// Test //
describe('User Repository Test', () => {
    beforeEach(() => {
        mockingoose.resetAll()
        jest.clearAllMocks()
    })

    it('Should return a user by id', async() => {
        const _user = { ...user } // Operador REST para hacer una fotocopia del objeto
        delete _user.password
        mockingoose(UserModel).toReturn(user, 'findOne')

        const _userRepository = new UserRepository({ UserModel })
        const expected = await _userRepository.get(_user._id)

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user)
    })

    it('Should find a user by username', async() => {
        const _user = { ...user }
        delete _user.password
        mockingoose(UserModel).toReturn(user, 'findOne')

        const _userRepository = new UserRepository({ UserModel })
        const expected = await _userRepository.get(_user.username)

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user)
    })

    it('Shold return a user collection', async() => {
        users = users.map((user) => {
            delete user.password
            return user
        })

        mockingoose(UserModel).toReturn(users, 'find')

        const _userRepository = new UserRepository({ UserModel })
        const expected = await _userRepository.getAll()
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users)
    })

    it('Should update an especific user by id', async () => {
        const _user = { ...user }
        delete _user.password
        mockingoose(UserModel).toReturn(_user, "findOneAndUpdate")

        const _userRepository = new UserRepository({ UserModel })
        const expected = await _userRepository.update(user._id, { name: "Marluan" });
    
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user)
      })
    
      it('Should delete an especific user by id', async () => {
        mockingoose(UserModel).toReturn(user, "findOneAndDelete")

        const _userRepository = new UserRepository({ UserModel })
        const expected = await _userRepository.delete(user._id)
        
        expect(JSON.parse(JSON.stringify(expected))).toEqual(true)
      })
})