import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Outgoing HTTP request', request);
//
//     const token = localStorage.getItem('accessToken');// get the token from the local storage
//
//     const newCloneRequest = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return next.handle(newCloneRequest);
//   }
// }

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Outgoing HTTP request', request);// this will log the request to the console
    // debugger;

    // Check if the request is for the login endpoint
    if (request.url.endsWith('/auth/login')) {
      return next.handle(request);
    }

    const token = localStorage.getItem('accessToken');// get the token from the local storage

    if (token) {
      const newCloneRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(newCloneRequest).pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              console.log('HTTP Response:', event);
            }
          },
          (error) => {
            console.error('HTTP Error:', error);
          }
        )
      );
    } else {
      // Handle case where token is not available
      console.error('Access token not found');
      return next.handle(request);
    }
  }
}
