import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { AncientPartTwoComponent } from './ancient-part2/ancient-part2.component';

const routes: Routes = [{ path: 'part2', component: AncientPartTwoComponent },
{ path: 'part1', component: AncientBeginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
