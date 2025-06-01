import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class ErrorBoundaryFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    if (Array.isArray(exceptionResponse['message'])) {
      return response.status(status).json(
        exceptionResponse['message'][0] || 'Validation error',
      );
    }

    const message =
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : exceptionResponse['message'] || 'Something went wrong';

    response.status(status).json(message);
  }
}
