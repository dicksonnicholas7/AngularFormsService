import { Component } from '@angular/core';
import { PlayService } from './services/playService';
import { Play } from './domain/play';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app';

  constructor(private playService: PlayService){ 
  }

  public plays: Play[];

  public buttonClicked(){
    console.log(this.playService);
    this.plays = this.playService.getPlays();
  }
}
