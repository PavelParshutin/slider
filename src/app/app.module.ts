import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
