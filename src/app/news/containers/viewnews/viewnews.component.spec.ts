import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewsComponent } from './viewnews.component';

describe('ViewnewsComponent', () => {
  let component: ViewnewsComponent;
  let fixture: ComponentFixture<ViewnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
