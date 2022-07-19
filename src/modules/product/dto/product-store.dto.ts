import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ProductStoreDto {
  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  page: number;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  perPage: number;
}
