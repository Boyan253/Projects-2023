import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ServiceService) { }

  ngOnInit(): void {
    this.apiService.loadPosts().subscribe(
      (value: any) => {
        console.log(value.items);

        this.posts = value.items as any[]; // Cast value to 'any[]'
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
