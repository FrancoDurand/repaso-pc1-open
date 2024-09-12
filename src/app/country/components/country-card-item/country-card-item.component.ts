import { Component, Input } from '@angular/core';
import { Country } from '../../model/country';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-country-card-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './country-card-item.component.html',
  styleUrl: './country-card-item.component.css'
})
export class CountryCardItemComponent {
  @Input() country!: Country;
}
/*
country_name: "Afghanistan"
flag_unicode: "🇦🇫"
iso-3166: "AF"
supported_languages: 2
total_holidays: 24
uuid: "f0357a3f154bc2ffe2bff55055457068"
*/