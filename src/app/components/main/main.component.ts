import { Component } from '@angular/core';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dataUnits = [
    {
      imgStatus: true,
      numUnit: 'Unit 1: Where are you from?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 22m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 4
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '60%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '86%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '86%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 2: What do you do?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 6m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '33%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '0%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 3: How much are these?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '0h 53m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '93%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 4: Do you play the guitar?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 18m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '60%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 5
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '93%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '86%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 5: What an interesting family!',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '2h 11m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '78%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '25%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '78%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '86%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 6: How often do you run?',
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 19m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: 'Unit 7: We went dancing!',
      numFill: 15,
      numCompleted: 15,
      timeSpent: '1h 24m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 4
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '91%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: `Unit 8: How's the neighborhood?`,
      numFill: 15,
      numCompleted: 15,
      timeSpent: '0h 45m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '60%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: `Unit 9: What does she look like?`,
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 21m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '20%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 5
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '33%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 6
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ]
    },
    {
      imgStatus: true,
      numUnit: `Unit 10: Have you ever been there?`,
      numFill: 16,
      numCompleted: 16,
      timeSpent: '1h 1m',
      finishedUnit: '100%',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '78%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '86%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '87%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '64%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '78%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 5
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '93%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '73%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3 
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 11: It's a really nice city.`,
      numFill: 0,
      numCompleted: 16,
      timeSpent: '0h 0m',
      finishedUnit: '--',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 12: It's important to get rest.`,
      numFill: 0,
      numCompleted: 15,
      timeSpent: '0h 0m',
      finishedUnit: '--',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 13: What would you like?`,
      numFill: 0,
      numCompleted: 15,
      timeSpent: '0h 0m',
      finishedUnit: '--',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 14: It's the coldest city!`,
      numFill: 0,
      numCompleted: 14,
      timeSpent: '0h 0m',
      finishedUnit: '--',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 15: What are you doing later?`,
      numFill: 0,
      numCompleted: 14,
      timeSpent: '0h 0m',
      finishedUnit: '--',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
    {
      imgStatus: false,
      numUnit: `Unit 16: How have you changed?`,
      numFill: 0,
      numCompleted: 15,
      timeSpent: '0h 0m',
      finishedUnit: '     --',

      vocabulary: [
        {
          detailName: 'Vocabulary Exercise 1',
          detatilScore: 'First score',
          percent: '50%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Vocabulary Exercise 2',
          detatilScore: 'First score',
          percent: '89%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        }
      ],
      grammar: [
        {
          detailName: 'Grammar Exercise 1',
          detatilScore: 'First score',
          percent: '88%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 2',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Grammar Exercise 3',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Grammar Exercise 4',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 5',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Grammar Exercise 6',
          detatilScore: 'First score',
          percent: '80%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 7
        },
        {
          detailName: 'Grammar Exercise 7',
          detatilScore: 'First score',
          percent: '83%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 8
        },
        {
          detailName: 'Grammar Exercise 8',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      listening: [
        {
          detailName: 'Listening Exercise 1',
          detatilScore: 'First score',
          percent: '75%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 2
        },
        {
          detailName: 'Listening Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      reading: [
        {
          detailName: 'Reading Exercise 1',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
        {
          detailName: 'Reading Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ],
      video: [
        {
          detailName: 'Video Exercise 1',
          detatilScore: 'First score',
          percent: '67%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 3
        },
        {
          detailName: 'Video Exercise 2',
          detatilScore: 'First score',
          percent: '100%',
          detailBest: 'Best score',
          bestPercent: '100%',
          detailAttempts: 'Attempts',
          attempts: 1
        },
      ]
    },
  ]

  unitCtrStatus = false;
  detailsCtrStatus = false;

  toggleUnitCtr() {
    this.unitCtrStatus = !this.unitCtrStatus;
    this.detailsCtrStatus = false;
  }
}
