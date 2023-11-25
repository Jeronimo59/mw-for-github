export abstract class UserService {
   constructor(userName: string) {
      this.userName = userName;
   }
   name: string | null = null;
   image: string | null = null;
   userName: string | null = null;
   userImage: string | null = null;

   abstract getProjectsAsync(visibility: "all" | "public" | "private"): Promise<any>;
}