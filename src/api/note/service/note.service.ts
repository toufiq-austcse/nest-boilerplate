import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repository/note.repository';
import { CreateNoteReqDto, UpdateNoteReqDto } from '../dto/req/note-req.dto';
import { Note } from '../schema/note.schema';

@Injectable()
export class NoteService {
  constructor(private repository: NoteRepository) {
  }

  create(dto: CreateNoteReqDto) {
    let newNote: Note = {
      title: dto.title,
      body: dto.body
    };
    return this.repository.create(newNote);
  }

  async update(noteId: string, update: UpdateNoteReqDto) {
    await this.repository.findOneAndUpdate({ _id: noteId }, update);
    return this.repository.findOne({ _id: noteId });
  }

  getAllNotes() {
    return this.repository.findAll();
  }

  getNote(noteId: string) {
    return this.repository.findOne({ _id: noteId });
  }
}