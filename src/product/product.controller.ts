import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { PRODUCT_NOT_FOUND_ERROR } from "./product.constants";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import {FindByCategoryDto} from "./dto/find-by-category.dto";

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkJwt')
  async checkJwt() {
    return 'success'
  }

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @Get('')
  async getAll() {
    return this.productService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @Post('findPrograms')
  async findByPrograms(@Body() dto: FindByCategoryDto) {
    return this.productService.findByCategory(dto)
  }

  @UsePipes(new ValidationPipe())
  @Get('find/:id')
  async findById(@Param('id') id: string) {
    const product = await this.productService.findById(id)
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return product;
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    const deletedProduct = await this.productService.deleteById(id)
    if (!deletedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return deletedProduct;
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async updateById(@Param('id') id: string, @Body() dto: CreateProductDto) {
    const updatedProduct = await this.productService.updateById(id, dto)
    if (!updatedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return updatedProduct;
  }

}
