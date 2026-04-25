import { Controller, Get, Post, Body, Param, Query, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { MarketplaceService } from './marketplace.service';
import { Product } from './schemas/marketplace.schema';
import { IsString, IsNumber, IsOptional } from 'class-validator';

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

  @Post('list/:sellerId')
  @ApiOperation({ summary: 'List a new product' })
  @ApiResponse({ status: 201, description: 'Product listed', type: Product })
  async create(@Param('sellerId') sellerId: string, @Body() dto: CreateProductDto) {
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

  @Get('member/:memberId')
  @ApiOperation({ summary: 'Get all listings by a specific member' })
  async findByMember(@Param('memberId') memberId: string) {
    return this.marketplaceService.findByMember(memberId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product details' })
  @ApiResponse({ status: 200, description: 'Product details', type: Product })
  async findOne(@Param('id') id: string) {
    return this.marketplaceService.findOne(id);
  }

  @Patch('logistics/:id')
  @ApiOperation({ summary: 'Update logistics/delivery status' })
  async updateLogistics(@Param('id') id: string, @Body() dto: { status: string; trackingNumber: string }) {
    return this.marketplaceService.updateLogistics(id, dto);
  }
}
