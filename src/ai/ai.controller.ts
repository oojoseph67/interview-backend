import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateAiResponseDto } from './dto/create-ai-response.dto';
import { UpdateAiSurveyDto, UpdateAiResponseDto } from './dto/update-ai.dto';
import { CreateAiSurveyDto } from './dto/create-ai-survey.dto';
import { Auth, AuthType } from 'src/auth/decorators/auth.decorator';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { UserPayload } from 'src/auth/guards/access-token/access-token.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AiSurvey } from './entities/ai-survey.entity';
import { AiResponse } from './entities/ai-response.entity';

@ApiTags('AI')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate-questions')
  @ApiOperation({ summary: 'Generate AI-powered survey questions' })
  @ApiResponse({ 
    status: 201, 
    description: 'Questions generated successfully',
    type: [String]
  })
  @ApiBearerAuth()
  generateQuestions(
    @Body() createAiDto: CreateAiSurveyDto,
    @ActiveUser() user: UserPayload,
  ) {
    return this.aiService.generateQuestions(createAiDto, user);
  }

  @Post('respond-to-question')
  @ApiOperation({ summary: 'Submit responses to survey questions' })
  @ApiResponse({ 
    status: 201, 
    description: 'Response submitted successfully',
    type: AiResponse
  })
  @ApiBearerAuth()
  respondToQuestion(
    @Body() createAiResponseDto: CreateAiResponseDto,
    @ActiveUser() user: UserPayload,
  ) {
    return this.aiService.respondToQuestion(createAiResponseDto, user);
  }

  @Get('suggest-titles')
  @ApiOperation({ summary: 'Get AI-suggested survey titles' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns a list of suggested survey titles',
    type: [String]
  })
  async suggestTitles() {
    return await this.aiService.suggestTitles();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.aiService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAiDto: UpdateAiSurveyDto) {
  //   return this.aiService.update(+id, updateAiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.aiService.remove(+id);
  // }
}
