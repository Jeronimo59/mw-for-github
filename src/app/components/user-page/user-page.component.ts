import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgUserService } from '../../services/ngUserService/ng-user-service';
import { UserService } from '../../services/user-service';

@Component({
   selector: 'app-user-page',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './user-page.component.html',
   styleUrl: './user-page.component.css'
})
export class UserPageComponent {

   userServices = Array<UserService>();
   projects = Array<any>();
   constructor(private route: ActivatedRoute, private ngUserService: NgUserService) {

      /** manage routes */
      route.paramMap.subscribe(async params => {

         this.username = params.get('username');
         if (this.username == null) {
            ngUserService.navigateToLoginPage();
            return;
         }
         this.userServices = this.ngUserService.getUserServices(this.username);
         if (this.userServices.length > 0) {
            this.projects = await this.userServices[0].getProjectsAsync("all");
         }
      })
   }

   username: string | null = null;
}
