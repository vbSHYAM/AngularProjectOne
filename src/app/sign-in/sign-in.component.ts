import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  showpassword: boolean = false;

  TogglePassword() {
    this.showpassword = !this.showpassword;
    console.log('cool');
  }
  constructor(private http: HttpClient , private router: Router) {}

  OnSubmit() {
    const body = { username: this.username, password: this.password };
    console.log(body);
    this.http
      .put('https://dev.ventriksapi1.com/account/signin', body)
      .subscribe({
        next: (response:any) => {
          console.log(response);
const idToken= response.data.idToken
console.log("idToken ------"+idToken);
window.localStorage.setItem("idToken",idToken)
this.router.navigate(['/listnews']);
        },
        error: (error) => {
          console.log(error.code);
        },
      });
  }
}
