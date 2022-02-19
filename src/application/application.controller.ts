import {
    Body,
    Controller, Delete, Get, NotFoundException, Param, Patch,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {CreateRequestDto} from "./dto/create-request.dto";
import {ApplicationService} from "./application.service";

@Controller('application')
export class ApplicationController {
    constructor(
        private readonly applicationService: ApplicationService,
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('')
    async create(@Body() dto: CreateRequestDto) {
        return this.applicationService.create(dto);
    }

    @UsePipes(new ValidationPipe())
    @Get('')
    async getAll() {
        return this.applicationService.getAll()
    }

    @UsePipes(new ValidationPipe())
    @Get(':id')
    async getOne(@Param('id') id:string) {
        return this.applicationService.getOne(id)
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        const deletedWorker = await this.applicationService.deleteById(id)
        if (!deletedWorker) {
            throw new NotFoundException('Request was not found');
        }
        return deletedWorker;
    }
}
