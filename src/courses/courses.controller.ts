import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    NotFoundException,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileElementResponse } from "../files/dto/file-element.reposonse";
import { MFile } from "../files/mfile.class";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { FilesService } from "../files/files.service";
import {CoursesService} from "./courses.service";
import {CreateCourseDto} from "./dto/create-course.dto";
import {PRODUCT_NOT_FOUND_ERROR} from "../product/product.constants";

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly productService: CoursesService,
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
    async create(@Body() dto: CreateCourseDto, @UploadedFile() file: Express.Multer.File) {
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
    async updateById(@Param('id') id: string, @Body() dto: CreateCourseDto, @UploadedFile() file: Express.Multer.File) {
        console.log(file)
        const images = await this.uploadFile(file)
        const updatedProduct = await this.productService.updateById(id, dto, images)
        if (!updatedProduct) {
            throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
        }
        return updatedProduct;
    }

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
