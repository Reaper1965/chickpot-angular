import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemsComponent } from './additems.component';

describe('AdditemsComponent', () => {
  let component: AdditemsComponent;
  let fixture: ComponentFixture<AdditemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditemsComponent]
    });
    fixture = TestBed.createComponent(AdditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
