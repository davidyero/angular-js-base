import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import { FourthStepComponent } from './components/fourth-step/fourth-step.component';


@NgModule({
  declarations: [ThirdStepComponent, FourthStepComponent],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
