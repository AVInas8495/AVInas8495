import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AncientBeginComponent } from './ancient-begin/ancient-begin.component';
import { AncientPartTwoComponent } from './ancient-part2/ancient-part2.component';
import { MiddlePartComponent } from './middle-part/middle-part.component';
import { ModernPartComponent } from './modern-part/modern-part.component';
import { Part6Component } from './part6/part6.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
import { Part5Component } from './part5/part5.component';

@NgModule({
  declarations: [
    AppComponent,
    AncientBeginComponent,
    AncientPartTwoComponent,
    MiddlePartComponent,
    ModernPartComponent,
    Part6Component,
    ScreenThreeComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component
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
