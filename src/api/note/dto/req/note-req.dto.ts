import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNoteReqDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;
}

export class UpdateNoteReqDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  body: string;
}