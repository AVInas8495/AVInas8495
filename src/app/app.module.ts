import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { AncientPartTwoComponent } from './ancient-part2/ancient-part2.component';

@NgModule({
  declarations: [
    AppComponent,
    AncientBeginComponent,
    AncientPartTwoComponent
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
