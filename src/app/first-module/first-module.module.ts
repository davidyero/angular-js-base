import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';

@NgModule({
  declarations: [FirstStepComponent, SecondStepComponent],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
