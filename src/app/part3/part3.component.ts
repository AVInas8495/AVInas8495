import { Component } from '@angular/core';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css'],
})
export class Part3Component {
  public tab: string = 'tab1';
  public tabpart: string = 'tab11';

  isshow: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  // section 2 variables
  main_options_left: boolean = false;
  main_options_right: boolean = false;
  revolt: boolean = false;
  indian_council: boolean = false;
  face_ww1: boolean = false;
  gov_act: boolean = false;
  submenu_revolt: boolean = false;
  submenu_face_ww1: boolean = false;
  submenu_gov_act: boolean = false;
  submenu_indian_council: boolean = false;
  showtabsall: boolean = false;
  // section 2 variables end

  public showTab(tab: string) {
    this.tab = tab;
  }

  public showTabpart(tabpart: string) {
    this.tabpart = tabpart;
  }

  showContentpart() {
    this.submenu_revolt = !this.submenu_revolt;
    this.indian_council = !this.indian_council;
    this.main_options_right = !this.main_options_right;
    if (this.submenu_revolt) this.showTabpart('tab12');
    else this.showTabpart('tab11');
  }

  showaob() {
    this.isshow = !this.isshow;
  }

  showContent() {
    this.visible1 = !this.visible1;
    if (this.visible1) this.showTab('tab2');
    else this.showTab('tab1');
  }

  showContent1() {
    this.visible2 = !this.visible2;
    if (this.visible2) this.showTab('tab5');
    else this.showTab('tab1');
  }

  showContent2() {
    this.visible3 = !this.visible3;
    if (this.visible3) this.showTab('tab12');
    else this.showTab('tab1');
  }

  showContentpart1() {
    this.submenu_indian_council = !this.submenu_indian_council;
    this.revolt = !this.revolt;
    this.main_options_right = !this.main_options_right;
    if (this.submenu_indian_council) this.showTabpart('tab16');
    else this.showTabpart('tab11');
  }

  showContentpart2() {
    this.revolt = !this.revolt;
    this.indian_council = !this.indian_council;
    this.gov_act = !this.gov_act;
    this.submenu_face_ww1 = !this.submenu_face_ww1;
    if (this.submenu_face_ww1) this.showTabpart('tab21');
    else this.showTabpart('tab11');
  }

  showContentpart3() {
    this.face_ww1 = !this.face_ww1;
    this.revolt = !this.revolt;
    this.indian_council = !this.indian_council;
    this.submenu_gov_act = !this.submenu_gov_act;
    if (this.submenu_gov_act) this.showTabpart('tab23');
    else this.showTabpart('tab11');
  }

  showalltabs() {
    this.showTab('tab1');
    this.showtabsall = !this.showtabsall;
  }

  ngOnInit(): void {}
}
