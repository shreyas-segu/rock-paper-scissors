import { Component } from '@angular/core';
import { GameManagementService } from './game-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private gameManagement: GameManagementService) {}

  botSymbol: string;
  playerSymbol = 'default';

  botScore: number;
  humanScore: number;

  resetFlag: boolean;

  play() {
    this.gameManagement.playerMove();

    this.botSymbol = this.gameManagement.playerBot.name;
    this.playerSymbol = this.gameManagement.playerHuman.name;

    this.botScore = this.gameManagement.botScore;
    this.humanScore = this.gameManagement.humanScore;

    if (this.botScore >= 3 || this.humanScore >= 3) {
      this.resetFlag = true;
    }
  }
  reset() {
    this.botScore = 0;
    this.humanScore = 0;
    this.gameManagement.reset();
    this.resetFlag = false;
  }
}
