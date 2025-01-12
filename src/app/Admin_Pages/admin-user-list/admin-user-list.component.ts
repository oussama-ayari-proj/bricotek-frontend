import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/User/user.service";
import {NgForOf, NgIf} from "@angular/common";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [
    NgForOf,
    MdbRippleModule,
    NgIf
  ],
  templateUrl: './admin-user-list.component.html',
  styleUrl: './admin-user-list.component.scss'
})
export class AdminUserListComponent implements OnInit{
  list=[]
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
          this.list=res as [];
          console.log(this.list)
          this.list=this.list.map(item => {
            item.dateOfBirth=item.dateOfBirth.slice(0, 10)
            const dateParts = item.dateOfBirth.split("-");
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            return {
            ...item,
            dateOfBirth: formattedDate
            }
          });
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }


  add() {
    this.router.navigateByUrl('admin-add-user')
  }

  deleteUser(userId: any) {
    const message =confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if(message){
      const index=this.list.findIndex((user)=> user.userId==userId)
      if(index!=-1){
        this.userService.deleteUser(userId).subscribe((res)=>{
          console.log(res);
        })
        this.list.splice(index,1);
      }

    }

  }
}
