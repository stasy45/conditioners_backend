import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConditionersService } from "./conditioners.service";
import { ConditionersController } from "./conditioners.controller";

import { Conditioners } from "../../models/conditioners";
import { DiagnosticParams } from '../../models/diagnostic_params';
import { ControlParams } from '../../models/control_params';
import { Errors } from 'src/models/errors';
import { ErrorsHistory } from 'src/models/errors_history';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Conditioners,
        DiagnosticParams,
        ControlParams,
        Errors,
        ErrorsHistory
      ])
    ],
    controllers: [ConditionersController],
    providers: [ConditionersService],
    exports: [TypeOrmModule],
})
export class ConditionersModule {}
