import { Component } from '@angular/core';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../services/User/user.service";
import jwt_decode, {jwtDecode} from 'jwt-decode';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MdbFormsModule,
    MdbRippleModule,
    MdbCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }
  onSubmit() {
    this.userService.authenticate(this.form.value)
      .subscribe({
        next:(res)=>{
          console.log(res.body);

          var user= jwtDecode(res.body.token);
          sessionStorage.setItem('token',res.body.token);
          if(user['role']=='ADMIN'){
            console.log('Admin user')
            this.router.navigateByUrl('admin-home')
          }else{
            console.log('Normal user')
            this.router.navigateByUrl('catalogue')
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }
}
