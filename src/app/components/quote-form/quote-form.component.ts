import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  name;
  email;
  phone;
  subject;
  message;

  constructor(public AppService: AppService) { }

  ngOnInit(): void {
  }

  sendMessage = () => {
    let formData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
      short_quote: true
    };

    this.AppService.sendMail(formData, "short_quote").subscribe(res => {
      console.log(res);
    });
  }

}
