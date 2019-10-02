import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameManagementService {
  playerHuman: move;
  playerBot: move;
  humanScore = 0;
  botScore = 0;

  moves: move[] = [
    {
      name: 'rock',
      uri: 'rock',
    },
    {
      name: 'paper',
      uri: 'paper',
    },
    {
      name: 'scissors',
      uri: 'scissors',
    },
  ];

  generateMove(): void {
    this.playerHuman = this.moves[Math.floor(Math.random() * 3)];
    this.playerBot = this.moves[Math.floor(Math.random() * 3)];
  }

  playerMove() {
    this.generateMove();
    this.evaluateScore();
  }

  evaluateScore(): void {
    if (this.playerHuman.name !== this.playerBot.name) {
      if (this.playerBot.name === 'rock') {
        if (this.playerHuman.name === 'paper') {
          this.humanScore += 1;
        } else {
          this.botScore += 1;
        }
      }
      if (this.playerBot.name === 'paper') {
        if (this.playerHuman.name === 'scissors') {
          this.humanScore += 1;
        } else {
          this.botScore += 1;
        }
      }
      if (this.playerBot.name === 'scissors') {
        if (this.playerHuman.name === 'rock') {
          this.humanScore += 1;
        } else {
          this.botScore += 1;
        }
      }
    }
  }
  reset() {
    this.humanScore = 0;
    this.botScore = 0;
  }
}
