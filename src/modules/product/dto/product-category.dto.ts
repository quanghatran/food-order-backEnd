import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ProductCaregoryDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  page: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  perPage: number;
}
