import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User;
  textLarge = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.textLarge = !this.textLarge
  }

}