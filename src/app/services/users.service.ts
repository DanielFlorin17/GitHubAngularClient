import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UsersService {

    constructor(private http: Http) {
    }

    getUsers(id) {
        return this.http.get('https://api.github.com/users?since=' + id);
    }


}

