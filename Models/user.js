import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: { type: 'string', required: true, trim: true },
    email: { type: 'string', required: true, trim: true },
    password: { type: 'string', required: true },
    picture: { type: 'string', default: '' },
    phone: { type: 'string', default: '', trim: true },
    address: {
        district: { type: 'string', default: '', trim: true },
        postalCode: { type: 'string', default: '', trim: true },
        address: { type: 'string', default: '', trim: true },
    }
}, { timestamps: true })

export default mongoose.model('users', userSchema);