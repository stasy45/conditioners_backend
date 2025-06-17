import { ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { ConditionersService } from '../services/conditioners/conditioners.service';


@Injectable()
export class ConditionerNotExistValidation implements PipeTransform {
  constructor(
    private conditionerService: ConditionersService,
  ) { }

  async transform(params: { conditionerId: number }) {
    const conditioner = await this.conditionerService.findOneById(params.conditionerId);

    if (!conditioner) throw new ConflictException('No such conditioner');

    return params
  }
}


@Injectable()
export class ErrorNotExistValidation implements PipeTransform {
  constructor(
    private conditionerService: ConditionersService,
  ) { }

  async transform(params: { code: number }) {
    const error = await this.conditionerService.findErrorByCode(params.code);

    if (!error) throw new ConflictException('No such error');

    return params
  }
}