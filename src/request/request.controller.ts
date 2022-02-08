import {
    Body,
    Controller, Delete, Get, NotFoundException, Param, Patch,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {RequestService} from "./request.service";
import {CreateRequestDto} from "./dto/create-request.dto";

@Controller('request')
export class RequestController {
    constructor(
        private readonly requestService: RequestService,
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('')
    async create(@Body() dto: CreateRequestDto) {
        return this.requestService.create(dto);
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return this.requestService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedWorker = await this.requestService.deleteById(id)
        if (!deletedWorker) {
            throw new NotFoundException('Request was not found');
        }
        return deletedWorker;
    }
}
