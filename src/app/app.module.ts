import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ModernPartComponent } from './modern-part/modern-part.component';

@NgModule({
  declarations: [
    AppComponent,
    AncientBeginComponent,
    MiddlePartComponent,
    ModernPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
