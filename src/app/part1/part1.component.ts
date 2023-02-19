import { Component } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component {
  public tab: string = "tab1";
  public tabpart: string = "tab11";

  isshow: boolean = false;
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
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
    this.main_options_right = !this.main_options_right
    if (this.submenu_revolt)
      this.showTabpart('tab12')
    else
      this.showTabpart('tab11')
  }

  showaob() {
    this.isshow = !this.isshow
  }

  showContent() {
    this.visible = !this.visible;
    if (this.visible)
      this.showTab('tab2')
    else
      this.showTab('tab1')
  }

  showContent1() {
    this.visible1 = !this.visible1;
    if (this.visible1)
      this.showTab('tab6')
    else
      this.showTab('tab1')
  }

  showContentpart1() {
    this.submenu_indian_council = !this.submenu_indian_council;
    this.revolt = !this.revolt;
    this.main_options_right = !this.main_options_right;
    if (this.submenu_indian_council)
      this.showTabpart('tab16')
    else
      this.showTabpart('tab11')
  }


  showContentpart2() {
    this.revolt = !this.revolt;
    this.indian_council = !this.indian_council;
    this.gov_act = !this.gov_act;
    this.submenu_face_ww1 = !this.submenu_face_ww1;
    if (this.submenu_face_ww1)
      this.showTabpart('tab21')
    else
      this.showTabpart('tab11')
  }

  showContentpart3() {
    this.face_ww1 = !this.face_ww1;
    this.revolt = !this.revolt;
    this.indian_council = !this.indian_council;
    this.submenu_gov_act = !this.submenu_gov_act;
    if (this.submenu_gov_act)
      this.showTabpart('tab23')
    else
      this.showTabpart('tab11')
  }

  ngOnInit(): void {



  }
}
