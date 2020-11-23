import { Component, OnInit } from '@angular/core';
import { Play } from 'src/app/domain/play';
import { PlayService } from 'src/app/services/playService';

@Component({
  selector: 'app-play-form',
  templateUrl: './play-form.component.html',
  styleUrls: ['./play-form.component.css']
})
export class PlayFormComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }
  
  public play: Play = new Play();

  onSubmit(){
    this.playService.add(this.play);
    this.play = new Play();
  }
}
