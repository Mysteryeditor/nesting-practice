import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesParentComponent } from './countries-parent.component';

describe('CountriesParentComponent', () => {
  let component: CountriesParentComponent;
  let fixture: ComponentFixture<CountriesParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesParentComponent]
    });
    fixture = TestBed.createComponent(CountriesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
