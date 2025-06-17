import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Conditioners } from "./models/conditioners";
import { DiagnosticParams } from "./models/diagnostic_params";
import { ControlParams } from "./models/control_params";
import { Errors } from './models/errors';
import { ErrorsHistory } from './models/errors_history';

import { ConditionersModule } from './services/conditioners/conditioners.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'conditioners',
      username: 'postgres',
      password: 'root',
      entities: [
        Conditioners,
        DiagnosticParams,
        ControlParams,
        Errors,
        ErrorsHistory
      ],
      synchronize: true,
    }),
    ConditionersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
