import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/User/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [],
  templateUrl: './admin-user-list.component.html',
  styleUrl: './admin-user-list.component.scss'
})
export class AdminUserListComponent implements OnInit{
  list:User[]
  constructor(
    private userService:UserService
  ) {
  }
  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.list=JSON.parse(JSON.stringify(res));
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }

  test(){
    console.log(this.list.length)
  }

}
