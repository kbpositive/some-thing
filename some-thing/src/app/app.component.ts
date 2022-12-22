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
  nextGif: any = null;
  nextGifFrames: any = null;
  inputgif: any = null;
  action: any = null;


  onSubmit(event: string) {
    this.action = event;
    console.log(this.inputgif);
    console.log(this.action);
    console.log(this.nextGif);
    console.log(this.nextGifFrames);
    return false;
  }

  selectFiles(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.Image = e.target.result
      var promisedGif = fetch(e.target.result)
        .then(resp => resp.arrayBuffer())
        .then(buff => {
          var gif = parseGIF(buff)
          var frames = decompressFrames(gif, true)
          this.nextGif = gif;
          this.nextGifFrames = frames;
          this.inputgif = gif;
          console.log(this.inputgif);
          console.log(this.action);
          return gif;
        });
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
