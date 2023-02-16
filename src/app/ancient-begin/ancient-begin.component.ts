import { Component } from '@angular/core';

@Component({
  selector: 'app-ancient-begin',
  templateUrl: './ancient-begin.component.html',
  styleUrls: ['./ancient-begin.component.css']
})
export class AncientBeginComponent {

  public tab: string = "tab1";
  isshow:boolean=false;
  visible:boolean=false;
  visible1:boolean=false

  public showTab(tab: string) {
    this.tab = tab;
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

  ngOnInit(): void {
   
   

  }

}
