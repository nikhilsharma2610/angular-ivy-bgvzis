import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = [];
  public filterData = [];
  public findData = '';
  public firstName = '';
  public lastName = '';
  public email = '';
  public getMale = false;
  public getFemale = false;
  private gender = '';

  constructor() {
    this.data = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];
    this.filterData = JSON.parse(JSON.stringify(this.data));
  }

  add() {
    if (
      this.firstName != '' &&
      this.lastName != '' &&
      this.email != '' &&
      this.gender != ''
    ) {
      this.data.push({
        id: this.data.length + 1,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        gender: this.gender
      });
      this.filterData = JSON.parse(JSON.stringify(this.data));
    } else window.alert('Please enter all data before adding');
  }
  setGender(gender) {
    this.gender = gender;
  }
  findGender(gender) {
    if(gender =='M') 
      this.getMale = !this.getMale
    if(gender =='F') 
      this.getFemale = !this.getFemale
    if (this.getMale && !this.getFemale)
      this.filterData = this.data.filter(res => {
        return res.gender == 'Male';
      });
    else if (!this.getMale && this.getFemale)
      this.filterData = this.data.filter(res => {
        return res.gender == 'Female';
      });
    else this.filterData = JSON.parse(JSON.stringify(this.data));
  }

  findbyData(e) {
    let filData = JSON.parse(JSON.stringify(this.data));
    this.filterData = filData.filter(res => {
      return (
        res.first_name.toLowerCase().indexOf(this.findData.toLowerCase()) != -1 ||
        res.last_name.toLowerCase().indexOf(this.findData.toLowerCase()) != -1 ||
        res.email.toLowerCase().indexOf(this.findData.toLowerCase()) != -1
      );
    });
  }
}
