import { Controller, Get, Post, Body, Param, Query, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
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

  @Get('search')
  @ApiOperation({ summary: 'Search for products' })
  @ApiResponse({ status: 200, description: 'List of products', type: [Product] })
  async findAll(@Query('category') category?: string) {
    return this.marketplaceService.findAll(category ? { category } : {});
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
