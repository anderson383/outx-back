import {
  CallHandler, ExecutionContext, Injectable, NestInterceptor
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IResponseHttp<T> {
  results: T[];
  count?: number;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponseHttp<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponseHttp<T>> {
    const { url } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data:any) => {
        try {
          let {
            results, count
          } = data;

          if (!results) {
            results = data;
          }
          count = results.length ? results.length : 0;

          return {
            status: statusCode,
            count,
            results
          };
        } catch (err) {
          return {
            status: statusCode,
            count: 0,
            results: []
          };
        }
      })
    );
  }
}
