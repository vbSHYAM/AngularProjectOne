import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
username:string=""
password:string=""

constructor(private http: HttpClient){}

OnSubmit(){
  const body = {username: this.username, password:this.password}
  console.log(body);
  this.http.put('https://dev.ventriksapi1.com/account/signin',body).subscribe({
    next:(response)=>{
      console.log(response);

    },
    error:(error)=>{
      console.log(error.code);

    }
  })

}
}
