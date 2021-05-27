import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  date : Date = new Date();
  money : number = 1000.5223
  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    
  }

}
