import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@common/database/repository/base.repository';
import { Note, NoteDocument } from '../schema/note.schema';

@Injectable()
export class NoteRepository extends BaseRepository<NoteDocument> {
  constructor(
    @InjectModel(Note.name)
    private note: Model<NoteDocument>
  ) {
    super(note);
  }
}
