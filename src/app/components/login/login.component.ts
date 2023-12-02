import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/services/sign-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// import { IStatus } from 'src/app/models/istatus';
import { AuthService } from 'src/app/services/auth.service';
import { ILogin } from 'src/app/models/ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  // status!: IStatus
  // status!: ILogin

  getLoginForm() {
    return this.loginForm.controls  // for validation on html form
  }

  constructor(
    private signupService: SignUpService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  handleLogin() {
    this.signupService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('login successfully...');
        console.log("Response : ", res);

        // save username, access token and refresh token into local storage
        // api should provided
        this.authService.addUsername(res.payload.username);
        this.authService.addAccessToken(res.payload.token);
        // this.authService.addRefreshToken(res.refresh_token);

        if(res.payload.username == 'admin'){
          this.router.navigate(['/dashboard']);
        }
        else{
          this.router.navigate(['/test']);
        }
        
      },
      error: (err) => {
        console.log("Error : ", err);
      }
    })
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })

    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }
}
