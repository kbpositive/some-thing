import { Component } from '@angular/core';

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
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
