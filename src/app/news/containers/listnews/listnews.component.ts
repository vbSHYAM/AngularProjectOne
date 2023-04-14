import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_GET_NEWS } from '../../../news/constants/news.c';
@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css'],
})
export class ListnewsComponent implements OnInit {
  news: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const Token = window.localStorage.getItem('idToken');
    if (Token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${Token}`,
        'content-Type': 'application/json',
      });
      const Headers = { headers: headers };

      this.http
        .put(`https://dev.ventriksapi1.com/${API_GET_NEWS}`, {}, Headers)
        .subscribe((response: any) => {
          console.log(response.data.records);

          this.news = response.data.records.map((record: any) => {
            const releaseTime = new Date(record.releaseTime); // create a Date object from the releaseTime string
            const hours = releaseTime.getHours().toString().padStart(2, '0'); // get the hours component
            const minutes = releaseTime
              .getMinutes()
              .toString()
              .padStart(2, '0'); // get the minutes component
            const day = releaseTime.getDate();
            const month = releaseTime.getMonth() + 1;
            const year = releaseTime.getFullYear().toString().substr(-2); // get the last two digits of the year

            return {
              headline: record.headline,
              body: record.body,
              releaseTime: `${hours}:${minutes}`,
              releaseDate: `${day}/${month}/${year}`,
            };
          });
        });
    } else {
      console.log('no token present ');
    }
  }
}
