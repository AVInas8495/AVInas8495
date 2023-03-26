import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';

const routes: Routes = [

  //  { path: 'screen1', component: ScreenOneComponent },
  // { path: 'screen2', component: ScreenTwoComponent },
  // { path: 'screen3', component: ScreenThreeComponent },
  { path: '**', component: ScreenOneComponent },
  // { path: '/', component: ScreenOneComponent },
  //  { path: '', component: ScreenTwoComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
