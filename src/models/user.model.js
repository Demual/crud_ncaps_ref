// Requires //
const { Schema, model } = require('mongoose')
const { compareSync, hashSync, genSaltSync } = require('bcryptjs')

// Create schemas //
const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: ({ createdAt: true, updatedAt: true }) })

// Methods - Delete password //
UserSchema.methods.toJSON = function() {
    let user = this.toObject()
    delete user.password
    return user
}

// Compare passwords //
UserSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password)
}

// Hooks //
UserSchema.pre('save', async function(next) {
    const user = this

    // Not new password //
    if(!user.isModified('password')) {
        return next()
    }

    // New password //
    const salt = genSaltSync(10)
    const hashedPassword = hashSync(user.password, salt)
    user.password = hashedPassword
    next()
})

// Exports //
module.exports = model('user', UserSchema)