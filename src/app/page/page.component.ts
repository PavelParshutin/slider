import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  user = [
    {
      profilePhoto: 'assets/img/photo-boy.svg',
      profileName: 'Nick Colebatch',
      profilePosition: 'RV Cover Supply',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. For me...'
    },
    {
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. For me...'
    },
    {
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. For me...'
    },
  ]

  ngOnInit(): void {
  }

}
