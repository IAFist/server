import { Module } from '@nestjs/common';
import { EmeilsController } from './emeils.controller';

@Module({
  imports: [],
  controllers: [EmeilsController],
  providers: [],
})
export class AppModule {}