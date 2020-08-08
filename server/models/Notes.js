import { Schema, model } from 'mongoose'

const NoteSchema = new Schema(
    {
        text: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = model('Note', NoteSchema)
