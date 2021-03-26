import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCeateComponent } from './post-ceate.component';

describe('PostCeateComponent', () => {
  let component: PostCeateComponent;
  let fixture: ComponentFixture<PostCeateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCeateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCeateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
