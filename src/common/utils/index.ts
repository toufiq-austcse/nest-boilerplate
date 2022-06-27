import { Types } from 'mongoose';

export function stringToMongooseObjectId(objectId: string) {
  return Types.ObjectId(objectId);
}
