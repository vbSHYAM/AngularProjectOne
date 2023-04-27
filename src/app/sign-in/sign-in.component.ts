import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  showpassword: boolean = false;
  signInForm: FormGroup;
  TogglePassword() {
    this.showpassword = !this.showpassword;
    console.log('cool');
  }
  constructor(
    private http: HttpClient,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    if (this.signInForm.valid) {
      const body = this.signInForm.value;
      this.http
        .put('https://dev.ventriksapi1.com/account/signin', body)
        .subscribe({
          next: (response: any) => {
            const idToken = response?.data?.idToken;
            if (idToken) {
              window.localStorage.setItem('idToken', idToken);
              this.router.navigate(['/listnews']);
            } else {
              console.log('ID-Token is missing in response');
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}

// -------------------------C_1--------------------------

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import {
//   FormGroup,
//   FormBuilder,
//   Validators,
// } from '@angular/forms';
// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css'],
// })
// export class SignInComponent {
//   username: string = '';
//   password: string = '';
//   showpassword: boolean = false;
//   signInForm: FormGroup;
//   TogglePassword() {
//     this.showpassword = !this.showpassword;
//     console.log('cool');
//   }
//   constructor(
//     private http: HttpClient,
//     public router: Router,
//     private formBuilder: FormBuilder
//   ) {
//     this.signInForm = this.formBuilder.group({
//       username: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]],
//     });
//   }

//   OnSubmit() {
//     console.log('cool');

//     const body = { username: this.username, password: this.password };
//     console.log(body);
//     this.http
//       .put('https://dev.ventriksapi1.com/account/signin', body)
//       .subscribe({
//         next: (response: any) => {
//           console.log(response);
//           const idToken = response.data.idToken;
//           console.log('idToken ------' + idToken);
//           window.localStorage.setItem('idToken', idToken);
//           this.router.navigate(['/listnews']);
//         },
//         error: (error) => {
//           console.log(error.code);
//         },
//       });
//   }
// }


