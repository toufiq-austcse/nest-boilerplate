import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from './note/note.module';
import { DatabaseModule } from '@common/database/database.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), DatabaseModule, IndexModule, NoteModule],
  controllers: [],
  providers: []
})
export class ApiModule {

}
