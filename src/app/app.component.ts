import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DesignIT';
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
      'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
      'https://i.ytimg.com/vi/RHLknisJ-Sg/maxresdefault.jpg',
      'https://sample-videos.com/img/Sample-jpg-image-500kb.jpg'

    ];
  }
}
