import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  flag = false;
  test = true;

  otpData: any;

  constructor(
    private userService: UserService, 
    private snack:MatSnackBar,
    private _router:Router
    ) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
  };

  ngOnInit(): void {
  }

  formSubmit(){
    // console.log(this.user);
    // Validations

    if(this.user.username == '' || this.user.username == null){
      this.snack.open('Please Enter Username.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }

    if(this.user.firstName == '' || this.user.firstName == null){
      this.snack.open('Please Enter First Name.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }

    if(this.user.lastName == '' || this.user.lastName == null){
      this.snack.open('Please Enter Last Name.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }

    if(this.user.email == '' || this.user.email == null){
      this.snack.open('Please Enter Email ID.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }

    if(this.user.phone == '' || this.user.phone == null){
      this.snack.open('Please Enter Phone Number.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return; 
    }

    if(this.user.username == '' || this.user.username == null){
      this.snack.open('Username is required.', 'Ok', {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right',
      });
      return;
    }
    // addUser function
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        // success

        // console.log(data);
        Swal.fire('Successfully Done', 'User with ID ' + data.id + ' is registered.', 'success').then((e)=>{
          this._router.navigate(['/user-dashboard/0']);
          // this.flag = true;
        });

        
      },
      (error:any)=>{
        // error

        console.log(error);
        Swal.fire('Error Occured', 'User with this user ID already exists.', 'error');
      }
    )
     
  }

  verify(){
    this.userService.verifyotp(this.otpData).subscribe(
      (data: any)=>{
        Swal.fire('Success', 'Your verification has been done successfully.', 'success');
        this.flag = false;
      },
      (error: any)=>{
        Swal.fire('Error', 'Incorrect Otp', 'error');
      }
    );
  }

}
