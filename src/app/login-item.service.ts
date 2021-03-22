import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginItemService {

  constructor() { }
  logged = false;
  permission = false;
  loginItems = [
    {
      username: "Admin",
      password: "AdminLogin"
      
    },
    {
      username: "User",
      password: "UserLogin"
      
    }
];

permissionDetails = [
  {
  username: "Admin",
  permission: true
  },
{
  username: "User",
  permission: false
}
];

check(loginItem){
  let index = this.loginItems.indexOf(loginItem);
  this.permission = this.permissionDetails[index]['permission'];
}

login(loginItem){
  let index = this.loginItems.indexOf(loginItem);
  if (index>=0){
    this.logged = true;
    return true;
  }
  else{
    this.logged = false;
    return false;
  }
}

}
