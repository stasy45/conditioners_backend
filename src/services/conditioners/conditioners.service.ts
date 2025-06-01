import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ControlParamsRequestDto, DiagnosticParamsRequestDto } from '../../dtos/conditioners.dto';

import { Conditioners } from "../../models/conditioners";
import { DiagnosticParams } from '../../models/diagnostic_params';
import { ControlParams } from '../../models/control_params';

@Injectable()
export class ConditionersService {
  constructor(
    @InjectRepository(Conditioners)
    private conditionerRepository: Repository<Conditioners>,

    @InjectRepository(DiagnosticParams)
    private diagnosticParamRepository: Repository<DiagnosticParams>,

    @InjectRepository(ControlParams)
    private controlParamRepository: Repository<ControlParams>,
  ) {}

  async findOneBySN(serial_number: string): Promise<Conditioners | null> {
    return await this.conditionerRepository.findOneBy({ serial_number });
  }

  async findOneById(id: number): Promise<Conditioners | null> {
    return await this.conditionerRepository.findOneBy({ id });
  }

  async getConditioner(serial_number: string): Promise<number | undefined> {
    const conditioner = await this.findOneBySN(serial_number);
    if (!conditioner) {
      return (await this.conditionerRepository.save({ serial_number })).id;
    }
    return conditioner.id
  }

  async postDiagnosticParams(conditionerId: number, newDiagnosticParams: DiagnosticParamsRequestDto): Promise<string> {
    const conditioner = await this.findOneById(conditionerId);
    this.diagnosticParamRepository.save({ ...newDiagnosticParams, conditioner });
    return JSON.stringify('Diagnostic success');
  }

  async postControlParams(conditionerId: number, newControlParams: ControlParamsRequestDto): Promise<string> {
    const conditioner = await this.findOneById(conditionerId);
    this.controlParamRepository.save({ ...newControlParams, conditioner });
    return JSON.stringify('Control success');
  }
}
