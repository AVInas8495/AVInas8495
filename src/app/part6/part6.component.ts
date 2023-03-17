import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-part6',
  templateUrl: './part6.component.html',
  styleUrls: ['./part6.component.css'],
})
export class Part6Component {

img:any={

  latestimg:{
    en:'./assets/latest.png',
    hn:'./assets/Hindi.png',
  }
}

currentLanguage:string ="";

  public tab: string = 'tab1';
  public tabpart: string = 'tab21';

  isshow: boolean = false;
  showtabsall: boolean = false;
  ///////////////////////////////////////////////////////  part-6   mychanges ///////////////////////////////////////
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;

  public showTab(tab: string) {
    this.tab = tab;
  }

  public showTabpart(tabpart: string) {
    this.tabpart = tabpart;
  }

  showContent2_1() {
    this.visible1 = !this.visible1;
    // this.visible3=!this.visible3;
    if (this.visible1) this.showTabpart('tab22');
    else this.showTabpart('tab21');
  }

  showContent2_2() {
    this.visible2 = !this.visible2;
    if (this.visible2) this.showTabpart('tab27');
    else this.showTabpart('tab21');
  }

  showContent2_3() {
    this.visible3 = !this.visible3;
    if (this.visible3) this.showTabpart('tab28');
    else this.showTabpart('tab21');
  }

  showalltabs() {
    this.showTabpart('tab21');
    this.showtabsall = !this.showtabsall;
  }
  /////////////////////////////////////////////////////////  part-6   mychanges ///////////////////////////////////////
  visible: boolean = false;
  visible4: boolean = false;
  visible5: boolean = false;

  showaob() {
    this.isshow = !this.isshow;
  }

  showContent() {
    this.visible = !this.visible;
    if (this.visible) this.showTab('tab2');
    else this.showTab('tab1');
  }

  showContent1() {
    this.visible1 = !this.visible1;
    if (this.visible1) this.showTab('tab6');
    else this.showTab('tab1');
  }

  showContentpart() {
    this.visible3 = !this.visible3;
    if (this.visible3) this.showTabpart('tab16');
    else this.showTabpart('tab11');
  }

  showContentpart1() {
    this.visible3 = !this.visible3;
    if (this.visible3) this.showTabpart('tab16');
    else this.showTabpart('tab11');
  }

  showContentpart2() {
    this.visible4 = !this.visible4;
    if (this.visible4) this.showTabpart('tab21');
    else this.showTabpart('tab11');
  }

  showContentpart3() {
    this.visible5 = !this.visible5;
    if (this.visible5) this.showTabpart('tab23');
    else this.showTabpart('tab11');
  }

  constructor(private ts:TranslateService){

  }

  ngOnInit(): void {

    this.ts.onLangChange.subscribe( lang=>{
      this.currentLanguage = lang.lang
    })
  }
}
