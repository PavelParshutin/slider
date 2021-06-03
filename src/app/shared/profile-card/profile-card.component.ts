import { Component, HostListener, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  screenWidth
  @Input() user: User;
  textLarge = false;
  textLength = 220;
  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.screenWidth = window.outerWidth;
    this.textLength = (this.screenWidth / 4) /2
    // this.textLength = (this.screenWidth / 4 ) /3
    // console.log(this.textLength)
  }

  onClick(): void {
    this.textLarge = !this.textLarge;
  }

}
