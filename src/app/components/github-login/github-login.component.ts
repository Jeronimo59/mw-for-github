import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../../environments/environment';

@Component({
   selector: 'app-github-login',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './github-login.component.html',
   styleUrl: './github-login.component.css'
})
export class GitHubLoginComponent {

   constructor() { }

   ngOnInit() {

   }

   get gitHubLoginUrl() {
      return `https://github.com/login/oauth/authorize?client_id=${environment.github.clientId}`;
   }

   get awsS3LoginUrl() { return null; }

}
