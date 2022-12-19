import { Component } from '@angular/core';
import { parseGIF, decompressFrames } from 'gifuct-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'some-thing';
  Image: any = null;

  selectFiles(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.Image = e.target.result
      var promisedGif = fetch(e.target.result)
        .then(resp => resp.arrayBuffer())
        .then(buff => {
          var gif = parseGIF(buff)
          var frames = decompressFrames(gif, true)
          return gif;
        });

      console.log(promisedGif)
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
