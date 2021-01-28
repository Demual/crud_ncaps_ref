// Requires //
const { Schema, model } = require('mongoose')

// Create schemas //
const CommentSchema = new Schema({
    comment: { type: String, required: true },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true }
}, { timestamps: ({ createdAt: true, updatedAt: true }) })

// Plugings //
CommentSchema.plugin(require('mongoose-autopopulate'))

// Exports //
module.exports = model('comment', CommentSchema)