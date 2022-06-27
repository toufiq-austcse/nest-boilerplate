import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema/note.schema';
import { NoteService } from './service/note.service';
import { NoteRepository } from './repository/note.repository';
import { NoteController } from './controller/note.controller';

@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: Note.name,
    useFactory: () => {
      return NoteSchema;
    }
  }])],
  controllers: [NoteController],
  providers: [NoteService, NoteRepository]
})
export class NoteModule {
}
