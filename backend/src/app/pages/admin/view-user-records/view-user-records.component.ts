import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecordsService } from 'src/app/services/records.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-records',
  templateUrl: './view-user-records.component.html',
  styleUrls: ['./view-user-records.component.css']
})
export class ViewUserRecordsComponent implements OnInit {

  username: any;

  records: any;

  user: any;

  constructor(
    private _login: LoginService,
    private _record: RecordsService,
    private _route:ActivatedRoute,
    private _user: UserService,
    private _snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.username = this._route.snapshot.params.uname;

    this._record.getRecordsOfUser(this.username).subscribe(
      (data:any)=>{
        this.records = data;
        this._user.getUser(this.username).subscribe(
          (data:any)=>{
            this.user = data;
          },
          (error:any)=>{
            this._snack.open('Failed to get User.', 'Ok', {
              duration: 3000,
            });
          }
        );
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to load records from server.', 'error');
      }
    );

  //   this.user = this._login.getUser();
  //   // console.log(this.user);

  //   let username = this.user.username;

  //   this._record.getRecordsOfUser(username).subscribe(
  //     (data:any)=>{
  //       this.records = data;
  //       // console.log(this.records);
  //     }
  //   );
  // }
  }

}
