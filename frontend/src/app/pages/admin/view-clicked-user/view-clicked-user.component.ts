import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-clicked-user',
  templateUrl: './view-clicked-user.component.html',
  styleUrls: ['./view-clicked-user.component.css']
})
export class ViewClickedUserComponent implements OnInit { 

  username: any;

  user: any;

  constructor(
    private _route:ActivatedRoute,
    private _user:UserService
  ) { }

  ngOnInit(): void {
    this.username = this._route.snapshot.params.uname;

    this._user.getUser(this.username).subscribe(
      (data:any)=>{
        this.user = data;
        // console.log(this.user);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to load user from server', 'error');
      }
    );
  }

}
