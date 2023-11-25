import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAuthorizedComponent } from './github-authorized.component';

describe('GithubAuthorizedComponent', () => {
  let component: GithubAuthorizedComponent;
  let fixture: ComponentFixture<GithubAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubAuthorizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
