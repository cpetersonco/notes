import { Schema, model } from 'mongoose'

const ThirdPartyProviderSchema = new Schema({
    provider_name: {
        type: String,
        default: null,
    },
    provider_id: {
        type: String,
        default: null,
    },
    provider_data: {
        type: {},
        default: null,
    },
})

// Create Schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
    },
    {
        strict: false,
        timestamps: true,
    }
)

const User = model('users', UserSchema)

export default User
