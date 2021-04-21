import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessTokenInterceptor implements HttpInterceptor {
    constructor(
    ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let header = {}
        var token: string;
        token = '';
        if(token) {
            header['Authorization'] = token;
        }
        request = request.clone({
            setHeaders: header
        });
        return next.handle(request);
    }
}
