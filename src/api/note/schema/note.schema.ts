import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type NoteDocument = Note & Document;

@Schema({
  timestamps: true,
  collection: 'notes'
})
export class Note {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  body: string;

}

export const NoteSchema = SchemaFactory.createForClass(Note);
