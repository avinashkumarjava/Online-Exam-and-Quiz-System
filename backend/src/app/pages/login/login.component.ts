import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  }

  constructor(
    private snack:MatSnackBar, 
    private login: LoginService, 
    private router: Router) 
    { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("button clicked");
    if(this.loginData.username.trim() == '' || this.loginData.username == null){
      this.snack.open("Username is required", "Ok", {
        duration: 3000,
      });
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password == null){
      this.snack.open("Password is required", "Ok", {
        duration: 3000,
      });
      return;
    }

    // Request server to generate token.
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        // console.log(data);

        // Login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            // console.log(user);

            // redirect: ADMIN - Admin dashboard
            // redirect: NORMAL - User dashboard
            if(this.login.getUserRole() == 'ADMIN'){
              // redirect: ADMIN - Admin dashboard
              window.location.href = '/admin';
              // this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }
            else if(this.login.getUserRole() == 'NORMAL'){
              // redirect: NORMAL - User dashboard
              window.location.href = '/user-dashboard/0';

              // this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
            else{
              this.login.logout();
            }
          },
        );

      },
      (error:any)=>{
        console.log("Error");
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'Ok', {
          duration: 3000,
        });
      }
    );
  }

}
