import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConditionersService } from "./conditioners.service";
import { ControlParamsRequestDto, DiagnosticParamsRequestDto } from '../../dtos/conditioners.dto';
import { ConditionerNotExistValidation } from '../../validations/conditioners';


@Controller('conditioners')
export class ConditionersController {
  constructor(
    private conditionerService: ConditionersService,
  ) {}

  @Get(':serial_number')
  async getConditioner(@Param('serial_number') serial_number: string): Promise<number | undefined> {
    return this.conditionerService.getConditioner(serial_number);
  }

  @Post(':conditionerId/diagnostic_params')
  @UsePipes(ValidationPipe, ConditionerNotExistValidation)
  async postDiagnosticParams(@Param() params: { conditionerId: number }, @Body() newDiagnosticParams: DiagnosticParamsRequestDto): Promise<string> {
    return this.conditionerService.postDiagnosticParams(params.conditionerId, newDiagnosticParams);
  }

  @Post(':conditionerId/control')
  @UsePipes(ValidationPipe, ConditionerNotExistValidation)
  async postControlParams(@Param() params: { conditionerId: number }, @Body() newControlParams: ControlParamsRequestDto): Promise<string> {
    return this.conditionerService.postControlParams(params.conditionerId, newControlParams);
  }
}
