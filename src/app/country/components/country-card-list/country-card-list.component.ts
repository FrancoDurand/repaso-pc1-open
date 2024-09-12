import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../../service/country-api.service';
import { Country } from '../../model/country';
import { CountryCardItemComponent } from '../country-card-item/country-card-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-country-card-list',
  standalone: true,
  imports: [NgFor, CountryCardItemComponent],
  templateUrl: './country-card-list.component.html',
  styleUrl: './country-card-list.component.css'
})
export class CountryCardListComponent implements OnInit {
  countries!: Country[];

  constructor(private countryApi: CountryApiService) { }

  ngOnInit(): void {
    this.countryApi.getCountries().subscribe({
      next: (response) => {
        this.countries = response.response.countries.map((country: any) => new Country(country));
      },
      error: (e) => {
        alert("error");
      }
    })
  }
}