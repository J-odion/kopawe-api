import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

class CreateAccommodationDto {
  @ApiProperty({ example: '2 Bedroom Flat near Camp' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Iyana Ipaja, Lagos' })
  @IsString()
  location: string;

  @ApiProperty({ example: 150000 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  roommateWanted: boolean;
}

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Post('list/:ownerId')
  @ApiOperation({ summary: 'List a new accommodation' })
  @ApiResponse({ status: 201, description: 'Accommodation listed', type: Accommodation })
  async create(@Param('ownerId') ownerId: string, @Body() dto: CreateAccommodationDto) {
    return this.accommodationService.createListing(ownerId, dto);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search for accommodations' })
  @ApiResponse({ status: 200, description: 'List of accommodations', type: [Accommodation] })
  async findAll(@Query('location') location?: string) {
    return this.accommodationService.findAll(location ? { location } : {});
  }

  @Get('roommates')
  @ApiOperation({ summary: 'Find roommate listings' })
  @ApiResponse({ status: 200, description: 'List of roommate matches', type: [Accommodation] })
  async findRoommates(@Query('location') location: string) {
    return this.accommodationService.findRoommates(location);
  }
}
