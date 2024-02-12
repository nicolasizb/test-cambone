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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 26m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [
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
            }
          ]
        }                
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 15m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 4m'
          },
        },
        {
          test: [
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 35m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [
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
            }
          ]
        }    
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 15m'
          },
        },
        {
          test: [
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
          ]
        }
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 7m'
          },
        },
        {
          test: [
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
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 2m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 25m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 16m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 3m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 28m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 12m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 13m'
          },
        },
        {
          test: [
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
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 19m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 4m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '1h 36m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 8m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 10m'
          },
        },
        {
          test: [
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
            }
          ]
        }      
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 50m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 4m'
          },
        },
        {
          test: [
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
            }
          ]
        }            
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 9m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 8m'
          },
        },
        {
          test: [
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
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 16m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 7,
            fill: 7,
            timeSpent: '0h 19m'
          },
        },
        {
          test: [
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
          ]
        }      
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 22m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 14m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 3m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 7,
            fill: 7,
            timeSpent: '0h 21m'
          },
        },
        {
          test: [
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
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [
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
            }
          ]
        }            
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 10m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 4m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 7m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 43m'
          },
        },
        {
          test: [
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
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 5m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 16m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 8m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 3m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 8,
            fill: 8,
            timeSpent: '0h 32m'
          },
        },
        {
          test: [
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
              percent: '83%',
              detailBest: 'Best score',
              bestPercent: '100%',
              detailAttempts: 'Attempts',
              attempts: 2
            },
            {
              detailName: 'Grammar Exercise 5',
              detatilScore: 'First score',
              percent: '60%',
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 6m'
          },
        },
        {
          test: [
            {
              detailName: 'Listening Exercise 1',
              detatilScore: 'First score',
              percent: '88%',
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 9m'
          },
        },
        {
          test: [
            {
              detailName: 'Reading Exercise 1',
              detatilScore: 'First score',
              percent: '75%',
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 11m'
          },
        },
        {
          test: [            
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
          ]
        }
      ],
      grammar: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      listening: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
      ],
      reading: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }        
      ],
      video: [
        {
          objFill: {
            completed: 2,
            fill: 2,
            timeSpent: '0h 24m'
          },
        },
        {
          test: [
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
            }
          ]
        }
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
