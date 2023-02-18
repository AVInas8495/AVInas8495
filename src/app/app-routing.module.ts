import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ModernPartComponent } from './modern-part/modern-part.component';

const routes: Routes = [{ path: 'ancient', component: AncientBeginComponent },
{ path: 'middle', component: MiddlePartComponent },
{ path: 'modern', component: ModernPartComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
