import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css'],
})
export class Part5Component {

  vd:any={

    video78:{
      en:'./assets/part5img/7.8E.mp4',
      hn:'./assets/part5img/7.8H.mp4',
    },
    video910:{
      en:'./assets/part5img/9.10E.mp4',
      hn:'./assets/part5img/9.10H.mp4',
    },
    video1112:{
      en:'./assets/part5img/11.12E.mp4',
      hn:'./assets/part5img/11.12H.mp4',
    },
    video1314:{
      en:'./assets/part5img/13.14E.mp4',
      hn:'./assets/part5img/13.14H.mp4',
    },
    video1516:{
      en:'./assets/part5img/15.16E.mp4',
      hn:'./assets/part5img/15.16H.mp4',
    },
  }

  public tab: string = 'tab1';
  public tabpart: string = 'tab11';

  currentLanguage:string ="";

  toggle = true;
  status = 'Enable';

  isshow: boolean = false;
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;
  visible5: boolean = false;

  visible11: boolean = false;
  visible21: boolean = false;
  visible31: boolean = false;
  visible41: boolean = false;
  visible51: boolean = false;
  showtabsall: boolean = false;

  // section 2 variables end

  public showTab(tab: string) {
    this.tab = tab;
  }

  public showTabpart(tabpart: string) {
    this.tabpart = tabpart;
  }

  showContent1() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.visible2 = !this.visible2;
    this.visible3 = !this.visible3;
    this.visible4 = !this.visible4;
    this.visible5 = !this.visible5;
    this.visible11 = !this.visible11;
    if (this.visible1) this.showTab('tab6');
    else this.showTab('tab2');
  }

  showContent2() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.visible1 = !this.visible1;
    this.visible3 = !this.visible3;
    this.visible4 = !this.visible4;
    this.visible5 = !this.visible5;
    this.visible21 = !this.visible21;
    if (this.visible2) this.showTab('tab6');
    else this.showTab('tab18');
  }

  showContent3() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.visible1 = !this.visible1;
    this.visible2 = !this.visible2;
    this.visible4 = !this.visible4;
    this.visible5 = !this.visible5;
    this.visible31 = !this.visible31;
    if (this.visible3) this.showTab('tab2');
    else this.showTab('tab6');
  }

  showContent4() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.visible1 = !this.visible1;
    this.visible2 = !this.visible2;
    this.visible3 = !this.visible3;
    this.visible5 = !this.visible5;
    this.visible41 = !this.visible41;

    if (this.visible4) this.showTab('tab2');
    else this.showTab('tab14');
  }

  showContent5() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.visible1 = !this.visible1;
    this.visible2 = !this.visible2;
    this.visible3 = !this.visible3;
    this.visible4 = !this.visible4;
    this.visible51 = !this.visible51;
    if (this.visible5) this.showTab('tab10');
    else this.showTab('tab10');
  }

  showalltabs() {
    this.showTab('tab1');
    this.showtabsall = !this.showtabsall;
  }

  constructor(private ts:TranslateService){

  }

  ngOnInit(): void {

    this.ts.onLangChange.subscribe( lang=>{
      this.currentLanguage = lang.lang
    })

  }
}
