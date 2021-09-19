import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadiobtnExercisePage } from './radiobtn-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: RadiobtnExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadiobtnExercisePageRoutingModule {}
