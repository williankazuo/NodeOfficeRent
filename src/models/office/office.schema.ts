import { Schema } from 'mongoose';

const OfficeSchema = new Schema({
    owner_id: String,
    title: String,
    description: String,
    people: Number,
    state: String,
    city: String,
    address: String,
    edited: Boolean,
    date_created: Date,
    date_updated: Date
});

export default OfficeSchema;