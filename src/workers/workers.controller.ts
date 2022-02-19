import {
    Body,
    Controller, Delete, Get,
    HttpCode, NotFoundException, Param, Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {WorkersService} from "./workers.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {CreateWorkerDto} from "./dto/create-worker.dto";
import {WORKER_WASNT_FOUND} from "./workers.constants";
import {FilesService} from "../files/files.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileElementResponse} from "../files/dto/file-element.reposonse";
import {MFile} from "../files/mfile.class";

@Controller('workers')
export class WorkersController {
    constructor(
        private readonly workersService: WorkersService,
        private readonly filesService: FilesService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async create(@Body() dto: CreateWorkerDto, @UploadedFile() file: Express.Multer.File) {
        const images = await this.uploadFile(file)
        return this.workersService.create(dto, images);
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return this.workersService.getAll()
    }


    @UsePipes(new ValidationPipe())
    @Get('find/:id')
    async findById(@Param('id') id: string) {
        const worker = await this.workersService.findById(id)
        if (!worker) {
            throw new NotFoundException(WORKER_WASNT_FOUND);
        }
        return worker;
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedWorker = await this.workersService.deleteById(id)
        if (!deletedWorker) {
            throw new NotFoundException(WORKER_WASNT_FOUND);
        }
        return deletedWorker;
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch(':id')
    @UseInterceptors(FileInterceptor('file'))
    async updateById(@Param('id') id: string, @Body() dto: CreateWorkerDto, @UploadedFile() file: Express.Multer.File) {
        const images = await this.uploadFile(file)
        const updatedWorker = await this.workersService.updateById(id, dto, images)
        if (!updatedWorker) {
            throw new NotFoundException(WORKER_WASNT_FOUND);
        }
        return updatedWorker;
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
