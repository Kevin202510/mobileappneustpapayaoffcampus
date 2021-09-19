import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiobtnExercisePageRoutingModule } from './radiobtn-exercise-routing.module';

import { RadiobtnExercisePage } from './radiobtn-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiobtnExercisePageRoutingModule
  ],
  declarations: [RadiobtnExercisePage]
})
export class RadiobtnExercisePageModule {}
