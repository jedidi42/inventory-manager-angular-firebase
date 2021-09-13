import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private route :ActivatedRoute,
    ) { }

  ngOnInit() {
  }
password="";
email="";
firebaseErrorMessage=""
onLoginUser()

  {
    

    console.log(this.email);

    console.log(this.password);


    this.authService.loginUser(this.email, this.password).then((result) => {
                       // no matter what, when the auth service returns, we hide the progress indicator
      if (result == null) {                               // null is success, false means there was an error
          console.log('logging in...');
          this.router.navigate(['/home'], { relativeTo: this.route });            // when the user is logged in, navigate them to dashboard
      }
      else if (result.isValid == false) {
          console.log('login error', result);
          this.firebaseErrorMessage = result.message;
      }
  });
  }


}
