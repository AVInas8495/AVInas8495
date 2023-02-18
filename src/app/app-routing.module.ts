import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { AncientPartTwoComponent } from './ancient-part2/ancient-part2.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ModernPartComponent } from './modern-part/modern-part.component';

const routes: Routes = [{ path: 'ancient', component: AncientBeginComponent },
{ path: 'middle', component: MiddlePartComponent },
{ path: 'modern', component: ModernPartComponent },
{ path: 'screen1', component: AncientBeginComponent },
{ path: 'screen2', component: AncientPartTwoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
