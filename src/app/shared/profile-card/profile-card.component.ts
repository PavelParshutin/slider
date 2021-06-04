import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User;
  textLarge = false;
  textLength = 220;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.textLarge = !this.textLarge;
  }

}
