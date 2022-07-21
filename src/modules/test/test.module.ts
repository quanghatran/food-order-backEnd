import { forwardRef, Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepository } from 'src/repositories';

@Module({
  providers: [TestService],
  imports: [TypeOrmModule.forFeature([
    TestRepository
  ]), forwardRef(() => TestModule)],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {}
