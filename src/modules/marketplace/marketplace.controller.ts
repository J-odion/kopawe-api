import { Controller, Get, Post, Body, Param, Query, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { MarketplaceService } from './marketplace.service';
import { Product } from './schemas/marketplace.schema';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

class CreateProductDto {
  @ApiProperty({ example: 'Student Bed Frame' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Clean and sturdy bed frame' })
  @IsString()
  description: string;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'USED' })
  @IsString()
  condition: string;
}

@ApiTags('Marketplace')
@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('list')
  @ApiOperation({ summary: 'List a new product' })
  @ApiResponse({ status: 201, description: 'Product listed', type: Product })
  async create(@CurrentUser('id') sellerId: string, @Body() dto: CreateProductDto) {
    return this.marketplaceService.createListing(sellerId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Search and filter marketplace products' })
  @ApiQuery({ name: 'search', required: false, description: 'Keyword search for title/description' })
  @ApiQuery({ name: 'category', required: false })
  @ApiQuery({ name: 'minPrice', required: false, type: Number })
  @ApiQuery({ name: 'maxPrice', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'List of products', type: [Product] })
  async findAll(@Query() query: any) {
    return this.marketplaceService.findAll(query);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('member')
  @ApiOperation({ summary: 'Get all listings by the current member' })
  async findByMember(@CurrentUser('id') memberId: string) {
    return this.marketplaceService.findByMember(memberId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product details' })
  @ApiResponse({ status: 200, description: 'Product details', type: Product })
  async findOne(@Param('id') id: string) {
    return this.marketplaceService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('logistics/:id')
  @ApiOperation({ summary: 'Update logistics/delivery status' })
  async updateLogistics(@Param('id') id: string, @Body() dto: { status: string; trackingNumber: string }) {
    return this.marketplaceService.updateLogistics(id, dto);
  }
}
