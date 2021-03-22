import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { LoginItemService } from '../login-item.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 
  loginform: FormGroup;
  constructor(private loginItemService : LoginItemService, 
              private formBuilder: FormBuilder) { }


  logged = this.loginItemService.logged;
  permission = this.loginItemService.permission;
  ngOnInit(): void {

    this.loginform = this.formBuilder.group({
      username: this.formBuilder.control("",Validators.required),
      password: this.formBuilder.control("",Validators.required),
      
    });
  }
  onLogin(){
    this.loginItemService.login(this.loginform);
  }
}
