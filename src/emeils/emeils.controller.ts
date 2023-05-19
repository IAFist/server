import { Controller, Post, Body } from '@nestjs/common';

@Controller('data')
export class EmeilsController {
  private email: string = '';
  private generatedNumbers: number[] = [];

  @Post()
  postData(@Body() data: { email: string, numbers: number[] }): string {
    this.email = data.email;
    this.generatedNumbers = data.numbers;
    return 'Data received successfully.';
  }
}