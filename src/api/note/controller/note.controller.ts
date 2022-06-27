import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { CreateNoteReqDto, UpdateNoteReqDto } from '../dto/req/note-req.dto';
import { NoteService } from '../service/note.service';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { BaseResponseDto } from '@common/dto/base-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Note')
@Controller({ path: 'notes', version: '1' })
@UseInterceptors(ResponseInterceptor)
export class NoteController {
  constructor(private noteService: NoteService) {
  }

  @Get()
  async index(): Promise<BaseResponseDto> {
    let notes = await this.noteService.getAllNotes();
    return {
      message: 'List Notes',
      data: notes
    };
  }

  @Get(':note_id')
  async show(@Param('note_id') noteId: string): Promise<BaseResponseDto> {
    let note = await this.noteService.getNote(noteId);
    return {
      message: null,
      data: note
    };
  }

  @Post()
  async create(@Body() dto: CreateNoteReqDto): Promise<BaseResponseDto> {
    let res = await this.noteService.create(dto);
    return {
      message: 'Note Created',
      data: res
    };
  }

  @Patch(':note_id')
  async update(@Param('note_id') noteId: string, @Body() dto: UpdateNoteReqDto): Promise<BaseResponseDto> {
    let res = await this.noteService.update(noteId, dto);
    return {
      message: 'Note Updated',
      data: res
    };
  }
}