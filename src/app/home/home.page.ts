import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  coches: any;
  
  constructor(private httpClient: HttpClient) {
    this.coches = this.httpClient.get('https://api.myjson.com/bins/pghre').pipe(map(res => res['results']));
  }
}