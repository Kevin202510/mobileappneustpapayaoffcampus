import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxExercisePage } from './checkbox-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxExercisePageRoutingModule {}
