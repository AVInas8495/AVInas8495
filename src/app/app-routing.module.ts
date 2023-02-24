import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { AncientPartTwoComponent } from './ancient-part2/ancient-part2.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ModernPartComponent } from './modern-part/modern-part.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';

const routes: Routes = [
  // { path: 'ancient', component: AncientBeginComponent },
  // { path: 'modern', component: ModernPartComponent },
  // { path: '', component: ScreenOneComponent },
  // { path: '', component: ScreenTwoComponent },
  { path: '', component: ScreenThreeComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
