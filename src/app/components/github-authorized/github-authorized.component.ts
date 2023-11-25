import { NgUserService } from '../../services/ngUserService/ng-user-service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Octokit } from '@octokit/core';
import { GitHubUserService } from '../../services/github-user-service';


@Component({
   selector: 'app-github-authorized',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './github-authorized.component.html',
   styleUrl: './github-authorized.component.css'
})

export class GithubAuthorizedComponent implements OnInit {
   constructor(private route: ActivatedRoute, private router: Router, private ngUserService: NgUserService) { }

   userAccessToken: string | null = null;
   username: string | null = null;

   ngOnInit() {
      /** obtain userAccessToken from url */
      this.route.queryParams.subscribe(params => {
         this.userAccessToken = params['token'];
         if (this.userAccessToken == null) {
            alert(`no token specified`);
            this.router.navigate(['/login']);
            return;
         }
         try {
            let userService = new GitHubUserService(this.userAccessToken);
            userService.initializeAsync().then(() => {
               this.ngUserService.userServices.push(userService);
               if (userService.userName != null)
                  this.ngUserService.navigateToUserPage(userService.userName);
            });
         }
         catch (exception) {
            alert(`exception: ${exception}`);
            this.router.navigate(['/login']);
            return;
         };
      });
   }
}

