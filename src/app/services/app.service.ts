import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  url = "http://duxtechnology.in/config.php";

  constructor(private http: HttpClient) { }

  options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[]
    },
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams | { [param: string]: string | string[] },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  }

  sendMail = (data, type): Observable<any> => {
    let formData = {
      "name": data.name,
      "email": data.email,
      "phone": data.phone,
      "subject": data.subject,
      "msg": data.msg
    };

    console.log(formData);

    return this.http.post(this.url, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
