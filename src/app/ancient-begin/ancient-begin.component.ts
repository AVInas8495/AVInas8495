import { Component } from '@angular/core';

@Component({
  selector: 'app-ancient-begin',
  templateUrl: './ancient-begin.component.html',
  styleUrls: ['./ancient-begin.component.css']
})
export class AncientBeginComponent {

  public tab: string = "tab1";
  public tabpart: string = "tab11";

  isshow:boolean=false;
  visible:boolean=false;
  visible1:boolean=false;
  visible2:boolean=false;
  visible3:boolean=false;
  visible4:boolean=false;
  visible5:boolean=false;

  public showTab(tab: string) {
    this.tab = tab;
  }

  public showTabpart(tabpart: string) {
    this.tabpart = tabpart;
  }

  showContentpart(){
    this.visible2=!this.visible2;
    if(this.visible2)
      this.showTabpart('tab12')
    else
      this.showTabpart('tab11')
    }

showaob(){
  this.isshow=!this.isshow
}

showContent(){
  this.visible=!this.visible;
  if(this.visible)
    this.showTab('tab2')
  else
    this.showTab('tab1')
  }

  showContent1(){
    this.visible1=!this.visible1;
    if(this.visible1)
      this.showTab('tab6')
    else
      this.showTab('tab1')
    }

    showContentpart1(){
      this.visible3=!this.visible3;
      if(this.visible3)
      this.showTabpart('tab16')
    else
      this.showTabpart('tab11')
      }


      showContentpart2(){
        this.visible4=!this.visible4;
        if(this.visible4)
        this.showTabpart('tab21')
      else
        this.showTabpart('tab11')
        }

        showContentpart3(){
          this.visible5=!this.visible5;
          if(this.visible5)
          this.showTabpart('tab23')
        else
          this.showTabpart('tab11')
          }

  ngOnInit(): void {
   
   

  }

}