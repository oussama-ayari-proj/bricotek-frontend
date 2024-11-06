import { Injectable } from '@angular/core';
import {AuthenticationService} from "../APIs/services/authentication.service";
import {UsersService} from "../APIs/services/users.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api:AuthenticationService,
    private usersApi:UsersService
  ) { }

  authenticate(body){
    return this.api.authenticate$Response({
      body: body
    })
  }
  register(user){
    return this.api.register$Response(user);
  }
  getUsers(){
    return this.usersApi.getUsers();
  }
}
