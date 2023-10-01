import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    user: String,
    password: String,
});

export interface IUser extends Document {
    user: String,
    password: String,
}

export default model<IUser>('User', schema);