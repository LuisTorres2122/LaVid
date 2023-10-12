import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    address: String,
    email: String,
    phone: Number,
    birthday: String,
    position: String,
    estatus: String,
});

export interface IMember extends Document {
    name: string,
    address?: string,
    email?: string,
    phone?: number,
    birthday: string,
    position: string,
    estatus: String,
}

export default model<IMember>('Member', schema);