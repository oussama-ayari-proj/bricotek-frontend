import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/User/user.service";
import {NgForOf} from "@angular/common";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [
    NgForOf,
    MdbRippleModule
  ],
  templateUrl: './admin-user-list.component.html',
  styleUrl: './admin-user-list.component.scss'
})
export class AdminUserListComponent implements OnInit{
  list:{}
  constructor(
    private userService:UserService,
    private router:Router
  ) {
  }
  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.list=res;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }

  test(){
    console.log(this.list)
  }

  add() {
    this.router.navigateByUrl('admin-add-user')
  }
}
