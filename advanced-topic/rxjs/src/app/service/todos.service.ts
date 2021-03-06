import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class TodosService extends DataService {
    constructor(http: HttpClient) {
        super('https://jsonplaceholder.typicode.com/todos', http);
    }

}