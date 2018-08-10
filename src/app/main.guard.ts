import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanLoadGuard implements CanLoad {
    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
