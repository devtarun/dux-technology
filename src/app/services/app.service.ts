import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  email: String = "info@duxtechnology.in";
  gmail: String = "duxtechnology@gmail.com";
  phone: String = "+91 72773 13622";
  youtubeLink: String = "https://www.youtube.com/channel/UCyS1nHyYQ9uThEjI7IYxsvA";
  twitterLink: String = "https://twitter.com/dux_technology";
  facebookLink: String = "https://www.facebook.com/duxtechno";
  linkedinLink: String = "http://www.linkedin.com/company/dux-technology";
  address: String = "7A, Commercial Building, 1st Floor, North of Children Park, S.K Puri, Boring Road Patna, PIN - 800001";

  constructor() { }
}
