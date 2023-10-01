import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    service: String,
    date: String,
    amount: Number,
    

});

export interface IGeneralOffering extends Document {
    service: String,
    date: String,
    amount: Number,
}

export default model<IGeneralOffering>('GeneralOferring', schema);