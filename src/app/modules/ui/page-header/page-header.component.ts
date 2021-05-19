import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  date : Date = new Date();
  money : number = 1.5223
  localeCode = ''
  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    if (this.locale == "en-US"){
      this.localeCode = 'USD'
    } else {
      this.localeCode = 'ARS'
    }
  }

}
