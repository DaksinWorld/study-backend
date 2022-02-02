import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post, Query, Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { PRODUCT_NOT_FOUND_ERROR } from "./product.constants";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileElementResponse } from "../files/dto/file-element.reposonse";
import { MFile } from "../files/mfile.class";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { FilesService } from "../files/files.service";
import {FindByCategoryDto} from "./dto/find-by-category.dto";

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly filesService: FilesService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkJwt')
  async checkJwt() {
    return 'success'
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() dto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    const images = await this.uploadFile(file)
    return this.productService.create(dto, images);
  }

  @UsePipes(new ValidationPipe())
  @Get('')
  async getAll() {
    return this.productService.getAll()
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

  /*@UsePipes(new ValidationPipe())
  @Post('findCategory')
  async findByCategory(@Body() findByCategory: FindByCategoryDto) {
    return this.productService.findByCategory(findByCategory)
  }*/

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
  @UseInterceptors(FileInterceptor('file'))
  async updateById(@Param('id') id: string, @Body() dto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    console.log(file)
    const images = await this.uploadFile(file)
    const updatedProduct = await this.productService.updateById(id, dto, images)
    if (!updatedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return updatedProduct;
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
    const saveArray: MFile[] = [new MFile(file)];
    if (file.mimetype.includes('image')) {
      const buffer = await this.filesService.convertToWebP(file.buffer);
      saveArray.push(new MFile({
        originalname: `${file.originalname.split('.')[0]}.webp`,
        buffer
      }));
    }
    return this.filesService.saveFiles(saveArray);
  }

}
