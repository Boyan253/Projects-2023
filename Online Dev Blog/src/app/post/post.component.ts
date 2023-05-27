import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  sys: any[] = [];
  constructor(private apiService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.loadPosts().subscribe(
      (value: any) => {
        console.log(value.items);

        this.posts = value.items
        // this.sys = value.items.map((item: any) => item.sys); // Extract 'fields' property from each item
        // Extract 'fields' property from each item
      },
      (err: any) => {
        console.log(err);
      }
    );

  }
  goToDetails(post: any) {
    this.router.navigate(['/details', post.id]);
  }
}
