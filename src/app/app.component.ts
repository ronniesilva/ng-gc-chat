import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private apiURL = 'https://api.graph.cool/simple/v1/cjizyxa5w72gr0157r03s2qza';

  constructor(
    private http: HttpClient
  ) {
    this.allUsers();
  }

  allUsers(): void {

    const body = {
      query: `query {
        allUsers{
          id
          createdAt
        }
      }`
    };

    this.http.post(this.apiURL, body)
      .subscribe(res => console.log('Query: ', res));

  }
}
