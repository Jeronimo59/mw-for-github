import { Routes } from '@angular/router';
import { GitHubLoginComponent } from './components/github-login/github-login.component';
import { GithubAuthorizedComponent } from './components/github-authorized/github-authorized.component';
import { UserPageComponent } from './components/user-page/user-page.component';

export const routes: Routes = [
   { path: '', component: GitHubLoginComponent },
   { path: 'login', component: GitHubLoginComponent },
   { path: 'github', component: GithubAuthorizedComponent },
   { path: 'users', component: UserPageComponent },
   { path: 'users/:username', component: UserPageComponent },
];
