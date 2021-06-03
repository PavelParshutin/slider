import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {

  constructor() { }

  users = [
    {
      id: 1,
      profilePhoto: 'assets/img/photo-boy.svg',
      profileName: 'Nick Colebatch',
      profilePosition: 'RV Cover Supply',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
    {
      id: 2,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
    {
      id: 3,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time.End Text'
    },
    {
      id: 4,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
    {
      id: 5,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
    {
      id: 6,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
  ]
  paginationOption
  spaceBetween = 15
  slidesCount = 3
  screenHeight: number;
  screenWidth: number;

  ngOnInit(): void {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.outerWidth;
    console.log(this.paginationOption);
    // console.log(this.screenHeight, this.screenWidth);
    if(this.screenWidth <= 1280) {
      this.slidesCount = 2
      this.spaceBetween = 15
      this.paginationOption = {
        clickable: true
      };
    } else {
      this.slidesCount = 3
      this.spaceBetween = 15
      this.paginationOption = {
        clickable: true
      };
    }
    if(this.screenWidth <= 320) {
      this.slidesCount = 1
      this.spaceBetween = 5
      this.paginationOption = {
        type: 'progressbar'
      }
      }

  }


}
