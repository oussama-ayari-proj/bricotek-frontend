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
  addUser(body){
    return this.api.register$Response({
      body:body
    })
  }
  getUsers(){
    return this.usersApi.getUsers();
  }
  deleteUser(id){
    return this.usersApi.deleteUser({
      id:id
    });
  }
}
