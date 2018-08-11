import {
  Injectable,
  EventEmitter
} from '@angular/core';

@Injectable()
export class controlLogoutService {
    logout = new EventEmitter < string > ();
}
