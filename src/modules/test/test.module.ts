import { forwardRef, Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepository } from 'src/repositories';
import { UserModule } from '../user/user.module';
import { StoreModule } from '../store/store.module';

@Module({
  providers: [TestService],
  imports: [TypeOrmModule.forFeature([TestRepository]), UserModule, StoreModule],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {}
