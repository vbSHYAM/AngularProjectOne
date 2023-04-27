import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ! 1.
  it('should have invalid form when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  // ! 2.
  it('should have a required username input', () => {
    const username = component.signInForm.controls['username'];
    expect(username.valid).toBeFalsy();
    expect(username.errors?.['required']).toBeTruthy();
  });

  //! 3.

  it('should accept valid email address', () => {
    const username = component.signInForm.controls['username'];
    username.setValue('test@example.com');
    expect(username.valid).toBeTruthy();
  });

  //! 4.
  it('username input rejects invalid email address', () => {
    const username = component.signInForm.controls['username'];
    username.setValue('Invalid-Email');
    expect(username.valid).toBeFalsy();
    expect(username.errors?.['email']).toBeTruthy();
  });

  //! 5.
  it('should have a required password input', () => {
    const password = component.signInForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.errors?.['required']).toBeTruthy();
  });

  //! 6.
  it('should accept valid passwords', () => {
    const password = component.signInForm.controls['password'];
    password.setValue('password123');
    expect(password.valid).toBeTruthy();
  });

  //! 7.
  it('should toggle the password visibility', () => {
    component.showpassword = true;
    fixture.detectChanges();
    const passwordInput = fixture.debugElement.query(
      By.css('#password')
    ).nativeElement;
    expect(passwordInput.type).toEqual('text');

    component.showpassword = false;
    fixture.detectChanges();
    expect(passwordInput.type).toEqual('password');
  });

  //! 8.

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'OnSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.OnSubmit).toHaveBeenCalled();
  });

  //! 9.

  it('should make a PUT request with the correct body', () => {
    const http = TestBed.inject(HttpClient);
    const httpSpy = spyOn(http, 'put').and.callThrough();
    const signInForm = component.signInForm;
    signInForm.controls['username'].setValue('test@example.com');
    signInForm.controls['password'].setValue('password123');
    component.OnSubmit();
    expect(httpSpy).toHaveBeenCalledOnceWith(
      '',
      {
        username: 'test@example.com',
        password: 'password123',
      }
    );
  });
});
