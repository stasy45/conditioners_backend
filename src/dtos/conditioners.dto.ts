import { IsNumber } from "class-validator";

export class DiagnosticParamsRequestDto {
  @IsNumber()
  voltage: number;

  @IsNumber()
  rotations: number;

  @IsNumber()
  pwm_condenser: number;

  @IsNumber()
  pwm_compressor: number;

  @IsNumber()
  pwm_current_fan: number;

  @IsNumber()
  amperage_condenser: number;

  @IsNumber()
  amperage_compressor: number;

  @IsNumber()
  temp_board: number;

  @IsNumber()
  temp_vapor: number;
}

export class ControlParamsRequestDto {
  @IsNumber()
  mode: number;

  @IsNumber()
  set_temp_interior: number;

  @IsNumber()
  speed_level_interior: number;

  @IsNumber()
  temp_in_air: number;
}
