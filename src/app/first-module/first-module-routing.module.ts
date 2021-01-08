import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Routes as ROUTES} from 'src/app/shared/constants/Routes';
import {FirstStepComponent} from './components/first-step/first-step.component';
import {SecondStepComponent} from './components/second-step/second-step.component';

const {MAIN, FIRST_STEP, SECOND_STEP} = ROUTES.FIRST_MODULE;

const routes: Routes = [
  {
    path: `${MAIN}${FIRST_STEP}`,
    component: FirstStepComponent
  },
  {
    path: `${MAIN}${SECOND_STEP}`,
    component: SecondStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule {
}
