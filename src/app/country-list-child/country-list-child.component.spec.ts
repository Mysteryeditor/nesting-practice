import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListChildComponent } from './country-list-child.component';

describe('CountryListChildComponent', () => {
  let component: CountryListChildComponent;
  let fixture: ComponentFixture<CountryListChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListChildComponent]
    });
    fixture = TestBed.createComponent(CountryListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
