import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'checkbox-exercise',
    loadChildren: () => import('./pages/checkbox-exercise/checkbox-exercise.module').then( m => m.CheckboxExercisePageModule)
  },
  {
    path: 'radiobtn-exercise',
    loadChildren: () => import('./pages/radiobtn-exercise/radiobtn-exercise.module').then( m => m.RadiobtnExercisePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
