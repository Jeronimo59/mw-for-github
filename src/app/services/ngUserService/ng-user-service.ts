import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service';

@Injectable({
   providedIn: 'root'
})

export class NgUserService {

   constructor(private router: Router) { }

   userServices = Array<UserService>();

   getUserServices(username: string): UserService[] {
      let userServices = Array<UserService>();
      for (let userService of this.userServices) {
         if (userService.userName == username) {
            userServices.push(userService);
         }
      }
      return userServices;
   }

   /** manage routes */

   navigateToLoginPage() {
      this.router.navigate(['/login']);
   }

   navigateToUserPage(alias: string) {
      this.router.navigate(['/users', alias]);
   }
}
