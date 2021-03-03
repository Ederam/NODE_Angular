import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './public/home/default/default.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SideMenuComponent,
    HeroComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
