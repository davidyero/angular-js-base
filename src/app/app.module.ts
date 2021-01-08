import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/components/app/app.component';
import {FirstModuleModule} from './first-module/first-module.module';
import {SecondModuleModule} from './second-module/second-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModuleModule,
    SecondModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
