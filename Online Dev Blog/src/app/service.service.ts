import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }


  loadPosts() {
    return this.httpClient.get(`https://cdn.contentful.com/spaces/d2r7x1sflies/environments/master/entries?access_token=arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw`)
  }
}
