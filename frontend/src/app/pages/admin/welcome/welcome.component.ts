import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: any;

  constructor(
    private _user:UserService,
    private _login: LoginService,
  ) { }

  ngOnInit(): void {
    this.user = this._login.getUser();
  }

  fun(){
    alert('This module is under development.');
  } 

  getAllUsers(){
    this._user.getUsers().subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error:any)=>{
        Swal.fire('Error', 'Error in loading data(Users) from server.', 'error');
      }
    );
  }
}
