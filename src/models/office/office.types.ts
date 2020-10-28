import { Document, Model } from 'mongoose';

export interface IOffice {
    owner_id: string;
    title: string;
    description: string;
    people: number;
    state: string;
    city: string;
    address: string;
    edited: boolean;
    date_created: Date;
    date_updated: Date;
}

export interface IOfficeDocument extends IOffice, Document { }

export interface IOfficeModel extends Model<IOfficeDocument> { }