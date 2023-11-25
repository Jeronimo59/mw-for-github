import { UserService } from "./user-service";

import { Octokit } from '@octokit/rest';

export class GitHubUserService extends UserService {
   constructor(token: string) {
      super("");
      this.name = "GitHub";
      this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png"
      this.token = token;
   }
   token: string | null = null;

   initializeAsync(): Promise<void> {
      return new Promise<void>(async (resolve, reject) => {
         if (this.token != null) {
            try {
               /** fetch user info */
               console.info(`fetching user info`);
               const octokit = new Octokit({
                  auth: this.token,
               })
               const response = await octokit.users.getAuthenticated()
               if (response != null && response.data != null && response.data.login != null) {
                  console.info(`GitHub user is ${JSON.stringify(response.data)}`);
                  this.userName = response.data.login;
                  this.userImage = response.data.avatar_url;
               }
               console.log(response);
               resolve();
            }
            catch (exception) {
               reject(exception);
            };
         }
         else {
            reject("token is null");
         }
      });
   }

   getProjectsAsync(visibility: "all" | "public" | "private"): Promise<any> {
      return new Promise<any>(async (resolve, reject) => {
         if (this.token != null) {
            try {
               /** fetch user info */
               console.info(`fetching repositories`);
               if (visibility != "public")
                  console.warn(`GitHub API does not support fetching private repositories`);
               const octokit = new Octokit({
                  auth: this.token,
               })

               const response = await octokit.repos.listForAuthenticatedUser({
                  visibility: visibility
               });

               if (response != null && response.data != null) {
                  console.info(`GitHub repositories are ${JSON.stringify(response.data)}`);
                  resolve(response.data);
                  return
               }
               console.log(response);
               reject("response is null");

            }
            catch (exception) {
               reject(exception);
            };
         }
         else {
            reject("token is null");
         }
      });
   }
}