import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GameManagementService } from '../game-management.service';

@Component({
  selector: 'app-player-layout',
  templateUrl: './player-layout.component.html',
  styleUrls: ['./player-layout.component.css'],
})
export class PlayerLayoutComponent implements OnInit {
  @Input() human: boolean;
  @Input() reset: boolean;
  @Input() symbol: string;
  @Output() clickEvent = new EventEmitter<any>();
  @Output() emitReset = new EventEmitter<any>();

  constructor(private gameManagement: GameManagementService) {}

  ngOnInit() {}

  play() {
    this.clickEvent.emit();
  }
  resetGame() {
    this.emitReset.emit();
  }
}
