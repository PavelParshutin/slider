import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data '
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
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would '
    },
    {
      id: 6,
      profilePhoto: 'assets/img/photo-girl.svg',
      profileName: 'Carlene Grace',
      profilePosition: 'Carlene Grace',
      profileText: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be overwhelming. The service trawls through your data and finds the areas where you can improve - even if you were an expert this would save time. End Text'
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
