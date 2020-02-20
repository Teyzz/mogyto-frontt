import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAccueilComponent } from './tableau-accueil.component';

describe('TableauAccueilComponent', () => {
  let component: TableauAccueilComponent;
  let fixture: ComponentFixture<TableauAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
