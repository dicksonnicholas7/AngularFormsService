import { Component, Input, OnInit } from '@angular/core';
import { Play } from '../../domain/play';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public plays: Play[];

  public name: string = "";
}
