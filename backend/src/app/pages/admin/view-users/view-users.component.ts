import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ViewClickedUserComponent } from '../view-clicked-user/view-clicked-user.component';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: Array<any>; 
  admins: Array<any>;

  panelOpenState = false;

  // userStatus:any;

  // record variables and objects
  record:any;

  constructor(
    public dialog: MatDialog,
    private _user: UserService,
    private _record: RecordsService,
  ) 
  {
    this.users = new Array<any>();
    this.admins = new Array<any>();
  }

  ngOnInit(): void {
    this.getAllUsers();
    // this.userStatus = this._login.isLoggedIn();
  }

  getAllUsers(){
    this._user.getUsers().subscribe( 
      (data:any)=>{

        for(let val of data){
          if(val.authorities[0].authority == 'NORMAL'){
            var length = this.users.push(val);
          }
          if(val.authorities[0].authority == 'ADMIN'){
            var l = this.admins.push(val);
          }
        }


      },
      (error:any)=>{
        Swal.fire('Error', 'Error in loading data(Users) from server.', 'error');
      }
    );
  }

  openDialog(){
    this.dialog.open(ViewClickedUserComponent);
  }

  getRecords(username:any){
    // console.log('test'+username);

    this._record.getRecordsOfUser(username).subscribe(
      (data:any)=>{
        console.log('Record fetched successfullu.');
        this.record = data;
        console.log(this.record);
      },
      (error:any)=>{
        Swal.fire('Error', 'Failed to load records from server.', 'error');
      }
    );

  }

  delUser(id:any){

    Swal.fire(
      {
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        title: 'Are you sure about deleting this user?'
      }
    ).then((result)=>{
      if(result.isConfirmed){
        this._user.deleteUser(id).subscribe(
          (data: any)=>{
            this.users = this.users.filter((u)=>u.id != id);
            Swal.fire('Success', 'User deleted successfully.', 'success');
          },
          (error:any)=>{
            Swal.fire('Error', 'Failed to delete user, try again.', 'error');
          }
        );
      }
    })

  }
}
