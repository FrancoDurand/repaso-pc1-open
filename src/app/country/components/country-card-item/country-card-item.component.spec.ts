import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardItemComponent } from './country-card-item.component';

describe('CountryCardItemComponent', () => {
  let component: CountryCardItemComponent;
  let fixture: ComponentFixture<CountryCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
