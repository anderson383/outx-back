import {
  CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor
} from '@nestjs/common';
import {
  catchError, map
} from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IResponseHttp<T> {
  data: T[];
  count?: number;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponseHttp<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponseHttp<T>> {
    const { url } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();

    return next.handle().pipe(
      catchError(err => {
        let customError;

        if (err.response) {
          customError = {
            status: err.status,
            message: err.response.message,
            data: err.response.error
          };
        } else {
          customError = {
            status: err.code,
            message: err.meta?.cause,
            data: err.meta
          };
        }
        throw new HttpException(customError, err.status);
      }),
      map((dataPayload:any) => {
        try {
          let { data } = dataPayload;

          if (!data) {
            data = dataPayload;
          }
          const message = data.message;

          if (data.message) {
            delete data.message;
          }

          return {
            status: statusCode,
            message,
            data: data
          };
        } catch (err) {}
      })
    );
  }
}
