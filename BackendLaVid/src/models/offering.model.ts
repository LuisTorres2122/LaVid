import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    leader: String,
    subleader: String,
    phoneLeader: Number,
    phoneSubleader: Number,
    date: String,
    hour: String,
    addressCell: String,
    amount: Number,
    planificationDate: String,
    planificationHour: String,
    cellplanification: [{
        privilege: String,
        resposible: String,
    }],
    snack: String,
    Observations: String,
    Assistance: [{
        name: String,
        position: String
    }]

});

export interface IOffering extends Document {
    leader: string,
    subleader: string,
    phoneLeader?: number,
    phoneSubleader?: number,
    date: string,
    hour: string,
    addressCell: string,
    amount: number,
    planificationDate: string,
    planificationHour: string,
    cellplanification: [{
        privilege: string,
        resposible: string,
    }],
    snack: String,
    Observations?: string,
    Assistance: [{
        name: string,
        position: string
    }]
}

export default model<IOffering>('Oferring', schema);