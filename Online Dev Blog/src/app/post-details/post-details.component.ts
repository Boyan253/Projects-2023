import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: any;
  post: any;

  constructor(private route: ActivatedRoute, private apiService: ServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);

      this.postId = params['id'];
      console.log(this.postId);

      this.loadPostDetails();
    });
  }
  loadPostDetails() {
    this.apiService.getPostDetails(this.postId).subscribe(
      (value: any) => {
        console.log(value); //  API response contains the complete post details
        this.post = value.fields; // assign the post details to the 'post' property
        localStorage.setItem('lastPostDetails', JSON.stringify({ id: this.postId }));
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
