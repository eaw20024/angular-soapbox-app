import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //Properties
  user: {

  }

  //Methods
  constructor() { 

  }

  ngOnInit() {
    this.user = {
      firstName: 'Eric',
      lastName: 'Washington',
      age: 28,
      address: {
        street: '100 Main St',
        city: 'Washington',
        state: 'DC'
      }
    }
  }

}

