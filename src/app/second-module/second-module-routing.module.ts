import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Routes as ROUTES} from '../shared/constants/Routes';
import {FourthStepComponent} from './components/fourth-step/fourth-step.component';
import {ThirdStepComponent} from './components/third-step/third-step.component';

const {MAIN, FOURTH_STEP, THIRD_STEP} = ROUTES.SECOND_MODULE;

const routes: Routes = [
  {
    path: `${MAIN}${THIRD_STEP}`,
    component: ThirdStepComponent
  },
  {
    path: `${MAIN}${FOURTH_STEP}`,
    component: FourthStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule {
}
