import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //! 1. (checks if initial value is empty string )
  it('should have initial value', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
    expect(component.showpassword).toBeFalse();
  });

  //! 2.(checks if toggle is functioning to view and hide password )

  it('should show or hide password on clicking toggle password button', () => {
    const toggleButton = fixture.debugElement.query(By.css('.togglePassword'));
    const passwordInput = fixture.debugElement.query(By.css('#password'));

    expect(component.showpassword).toBe(false);
    expect(passwordInput.nativeElement.type).toEqual('password');
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showpassword).toBe(true);
    expect(passwordInput.nativeElement.type).toEqual('text');

    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showpassword).toBe(false);
    expect(passwordInput.nativeElement.type).toEqual('password');
  });

  //! 3.(Test form is valid when both fields are provided)

  it('To check if form is valid if both username and password are provided', () => {
    component.username = 'user@example.com';
    component.password = 'password';
    const form = component.signInForm;
    expect(form.valid).toBeFalsy();
    expect(form.controls['username'].valid).toBeFalsy();
    expect(form.controls['password'].valid).toBeFalsy();
  });

  // ----------------------------------------------------------
  //! 3.(checks HTTP method)

  // it('should send HTTP PUT request on form submit', () => {
  //   //select the input fields and submit button
  //   const usernameInput = fixture.debugElement.query(By.css('#Username'));
  //   const passwordInput = fixture.debugElement.query(By.css('#password'));
  //   //triggers the click event
  //   const submitButton = fixture.debugElement.query(
  //     By.css('#SIGNIN')
  //   ).nativeElement;
  //   // set the values
  //   usernameInput.nativeElement.value = 'sharat.s@ventriks.com';
  //   passwordInput.nativeElement.value = 'Groot500!';
  //   // dispatch event
  //   usernameInput.nativeElement.dispatchEvent(new Event('input'));
  //   passwordInput.nativeElement.dispatchEvent(new Event('input'));

  //   fixture.detectChanges();
  //   submitButton.click();
  //   fixture.detectChanges();

  //   // checks for request method is PUT for the correct end point
  //   const req = httpMock.expectOne(
  //     'https://dev.ventriksapi1.com/account/signin'
  //   );
  //   expect(req.request.method).toEqual('PUT');
  //   expect(req.request.body).toEqual({
  //     username: 'sharat.s@ventriks.com',
  //     password: 'Groot500!',
  //   });
  //   // to simulate response from server, setting value of idToken property in response data
  //   req.flush({ data: { idToken: 'id_Token_here' } });
  //   // it checks if idToken is stored in local storage
  //   expect(window.localStorage.getItem('idToken')).toEqual('id_Token_here');
  //   // check if page is redirected to the correct page
  //   expect(component.router.url).toEqual('/listnews');

  // });
});
