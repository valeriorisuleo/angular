import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { DataService } from '../data.service';

@Injectable()
export class FollowersService extends DataService {
  constructor( http: Http) {
    super('https://api.github.com/users/valeriorisuleo/followers', http);
  }
}
