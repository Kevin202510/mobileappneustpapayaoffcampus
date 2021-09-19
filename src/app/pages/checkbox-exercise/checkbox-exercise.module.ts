import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxExercisePageRoutingModule } from './checkbox-exercise-routing.module';

import { CheckboxExercisePage } from './checkbox-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxExercisePageRoutingModule
  ],
  declarations: [CheckboxExercisePage]
})
export class CheckboxExercisePageModule {}
