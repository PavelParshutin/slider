import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { User } from 'src/app/user.interface';
import { UserService } from 'src/app/user.service';

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {

  users: User[];
  paginationOption;
  spaceBetween = 15;
  slidesCount = 3;
  screenHeight: number;
  screenWidth: number;

  constructor(private usersService: UserService) {
    this.users = usersService.getUsers();
  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.screenWidth = window.outerWidth;
    if (this.screenWidth <= 1280) {
      this.slidesCount = 2;
      this.spaceBetween = 15;
      this.paginationOption =  {
          type: 'bullets',
          clickable: true,
      };
    } else {
      this.slidesCount = 3;
      this.spaceBetween = 15;
      this.paginationOption =  {
        type: 'bullets',
        clickable: true,
      };
    }
    if (this.screenWidth <= 940) {
      this.slidesCount = 1;
    }
    if (this.screenWidth <= 320) {
      this.slidesCount = 1.1;
      this.spaceBetween = 5;
      this.paginationOption = {
        type: 'progressbar',
      };
    }
  }

}
