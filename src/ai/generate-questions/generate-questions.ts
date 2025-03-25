import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import OpenAI from 'openai';
import databaseConfig from 'src/config/database.config';
import Anthropic from '@anthropic-ai/sdk';

@Injectable()
export class GenerateQuestions {
  private anthropic: Anthropic;

  constructor(private configService: ConfigService) {
    const CLAUDE_AI_API_KEY =
      this.configService.get<string>('CLAUDE_AI_API_KEY');

    this.anthropic = new Anthropic({
      apiKey: CLAUDE_AI_API_KEY,
    });
  }

  async generateQuestions({ title }: { title: string }): Promise<string[]> {
    const prompt = `Generate 5 specific questions that would be relevant for someone writing about "${title}". 
    Return them as a numbered list without any additional commentary.`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      });

      const content =
        response.content[0].type === 'text' ? response.content[0].text : '';
      return this.parseNumberedList(content);

      // const formattedText =
      //   response.content[0].type === 'text'
      //     ? response.content[0].text
      //         .replace(/\n/g, ' ')
      //         .replace(/\s+/g, ' ')
      //         .trim()
      //     : '';
      // console.log({ formattedText });

      // return formattedText;
    } catch (error) {
      throw new HttpException(
        `Failed to generate prompt: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async suggestTitles(): Promise<string[]> {
    const prompt = `Suggest 5 interesting titles/questions that would be valuable for someone to answer about themselves. 
    These should be thought-provoking and help with self-reflection. 
    Return them as a numbered list without any additional commentary.`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      });

      const content =
        response.content[0].type === 'text' ? response.content[0].text : '';

      return this.parseNumberedList(content);
    } catch (error) {
      throw new HttpException(
        'Failed to suggest titles',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private parseNumberedList(text: string): string[] {
    return text
      .split('\n')
      .filter((line) => /^\d+\./.test(line))
      .map((line) => line.replace(/^\d+\.\s*/, '').trim());
  }
}
