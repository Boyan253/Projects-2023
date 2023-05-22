import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    PostComponent,
    AboutComponent,
    BlogHomeComponent,
    AboutPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
