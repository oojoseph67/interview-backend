import { Test, TestingModule } from '@nestjs/testing';
import { GenerateQuestions } from './generate-questions';

describe('GenerateQuestions', () => {
  let provider: GenerateQuestions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateQuestions],
    }).compile();

    provider = module.get<GenerateQuestions>(GenerateQuestions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
