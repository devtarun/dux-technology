import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage = _ => {
    console.log(this.name, this.email, this.phone, this.subject, this.message);
  }

}
