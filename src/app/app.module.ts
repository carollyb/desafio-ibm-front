import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroUsers,
  heroCheck,
  heroXMark,
  heroClock,
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroUsers, heroCheck, heroXMark, heroClock }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
