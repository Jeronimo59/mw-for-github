import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubLoginComponent } from './github-login.component';

describe('GithubLoginComponent', () => {
   let component: GitHubLoginComponent;
   let fixture: ComponentFixture<GitHubLoginComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [GitHubLoginComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(GitHubLoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
