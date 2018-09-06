import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventItem } from '../models/event-item.model';

@Injectable({
    providedIn: 'root'
})
export class ModelInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                    const body = this.mapEventModel(event.body);
                    event = event.clone({ body });
                }

                return event;
            })
        );
    }

    private mapEventModel(body: any): EventItem | EventItem[] {
        if (body instanceof Array) {
            return body.map( item => new EventItem(item));
        }

        return new EventItem(body);
    }
}
