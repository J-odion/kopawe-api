import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiQuery } from '@nestjs/swagger';
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

  @Get()
  @ApiOperation({ summary: 'Search and filter accommodations' })
  @ApiQuery({ name: 'search', required: false, description: 'Search title or location' })
  @ApiQuery({ name: 'minPrice', required: false, type: Number })
  @ApiQuery({ name: 'maxPrice', required: false, type: Number })
  @ApiQuery({ name: 'roommateWanted', required: false, type: Boolean })
  @ApiResponse({ status: 200, type: [Accommodation] })
  async findAll(@Query() query: any) {
    return this.accommodationService.findAll(query);
  }

  @Get('member/:memberId')
  @ApiOperation({ summary: 'Get all accommodations listed by a member' })
  async findByMember(@Param('memberId') memberId: string) {
    return this.accommodationService.findByMember(memberId);
  }

  @Get('roommates')
  @ApiOperation({ summary: 'Find roommate listings' })
  @ApiResponse({ status: 200, description: 'List of roommate matches', type: [Accommodation] })
  async findRoommates(@Query('location') location: string) {
    return this.accommodationService.findRoommates(location);
  }
}
