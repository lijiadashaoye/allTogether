import { Injectable } from '@angular/core';
import { Subject, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable()
export class httpService {

    getData(): Observable<any> {
        return timer(2000).pipe(
            map(val => {
                return {
                    name: 'asd',
                    age: 5
                }
            })
        )
    }

}