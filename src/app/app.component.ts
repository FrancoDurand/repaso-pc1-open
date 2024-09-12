import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToolbarComponent } from "./public/components/toolbar/toolbar.component"
//import { CountryCardItemComponent } from './country/components/country-card-item/country-card-item.component';
import { CountryCardListComponent } from './country/components/country-card-list/country-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, CountryCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repaso-pc1-open';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
