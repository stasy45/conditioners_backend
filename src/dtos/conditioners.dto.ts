import { IsNumber } from "class-validator";

export class DiagnosticParamsRequestDto {
  @IsNumber()
  voltage: number;

  @IsNumber()
  measured_speed_compressor: number;

  @IsNumber()
  pwm_condenser: number;

  @IsNumber()
  pwm_compressor: number;

  @IsNumber()
  actual_fan_pwm_evap: number;

  @IsNumber()
  current_compressor: number;

  @IsNumber()
  current_condensor: number;

  @IsNumber()
  temp_plate: number;

  @IsNumber()
  temp_evap: number;
}

export class ControlParamsRequestDto {
  @IsNumber()
  work_mode: number;

  @IsNumber()
  target_temp: number;

  @IsNumber()
  speed_fan: number;

  @IsNumber()
  temp_in_air: number;
}
