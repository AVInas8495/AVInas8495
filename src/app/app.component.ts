import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public langen: string;
  public langhn: string;
  
  constructor (public translate:TranslateService){

    this.langen = "English";
    this.langhn = "हिंदी";

    translate.addLangs(['en','hn']);
    translate.setDefaultLang('en');
    translate.use('hn')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|hn/) ? browserLang : 'en'); 

  }
}
