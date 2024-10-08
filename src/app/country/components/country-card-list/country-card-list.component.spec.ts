import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardListComponent } from './country-card-list.component';

describe('CountryCardListComponent', () => {
  let component: CountryCardListComponent;
  let fixture: ComponentFixture<CountryCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
