import { Component } from '@angular/core';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css']
})
export class Part5Component {
  public tab: string ="tab1";
  public tabpart: string ="tab11";

  isshow:boolean=false;
  visible:boolean=false;
  visible1:boolean=false;
  visible2:boolean=false;
  visible3:boolean=false;
  visible4:boolean=false;
  visible5:boolean=false;


  visible11:boolean=false;
  visible21:boolean=false;
  visible31:boolean=false;
  visible41:boolean=false;
  visible51:boolean=false;
  showtabsall:boolean=false;






  // section 2 variables end

  public showTab(tab: string) {
    this.tab =tab;
  }

  public showTabpart(tabpart: string) {
    this.tabpart =tabpart;
  }




  showContent1(){

    this.visible2=!this.visible2;
    this.visible3=!this.visible3;
    this.visible4=!this.visible4;
    this.visible5=!this.visible5;
    this.visible11=!this.visible11;
    if(this.visible1)
      this.showTab('tab6')
    else
      this.showTab('tab2')
  }

  showContent2(){
    this.visible1=!this.visible1;

    this.visible3=!this.visible3;
    this.visible4=!this.visible4;
    this.visible5=!this.visible5;
    this.visible21=!this.visible21;
    if(this.visible2)
      this.showTab('tab6')
    else
      this.showTab('tab18')
  }

  showContent3(){
    this.visible1=!this.visible1;
    this.visible2=!this.visible2;

    this.visible4=!this.visible4;
    this.visible5=!this.visible5;
    this.visible31=!this.visible31;
    if(this.visible3)
      this.showTab('tab2')
    else
      this.showTab('tab6')
  }

  showContent4(){
    this.visible1=!this.visible1;
    this.visible2=!this.visible2;
    this.visible3=!this.visible3;

    this.visible5=!this.visible5;
    this.visible41=!this.visible41;

    if(this.visible4)
      this.showTab('tab2')
    else
      this.showTab('tab14')
  }

  showContent5(){
    this.visible1=!this.visible1;
    this.visible2=!this.visible2;
    this.visible3=!this.visible3;
    this.visible4=!this.visible4;
    this.visible51=!this.visible51;
    if(this.visible5)
      this.showTab('tab10')
    else
      this.showTab('tab10')
  }

  

          showalltabs(){
            this.showTab('tab1')
           this.showtabsall=!this.showtabsall
          }


  ngOnInit(): void {
   
   

  }

}
