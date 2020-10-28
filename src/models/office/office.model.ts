import { model } from 'mongoose';
import { IOfficeDocument } from './office.types'
import OfficeSchema from './office.schema';

export const OfficeModel = model<IOfficeDocument>('office', OfficeSchema);