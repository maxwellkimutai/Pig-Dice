# Pig Dice
#### Asks the user to enter the names of two players then redirects them to the game where they roll a die and choose whether to keep rolling or hold, August 26, 2018
#### By **Maxwell Kimutai**
## Description
This application asks the user to enter the names of two players then redirects them to the game where they roll a die and choose whether to keep rolling or hold. If they keep rolling and roll a 1 they strike out. They can choose to hold and store their points. First player to 100 wins the game.
## BDD
The program asks for the users names and creates 2 profiles
* Example input: Maxwell, Thomas
* Example output: Player 1 = Maxwell Player 2 = Thomas

The program makes sure that only one player can roll or hold at a time
* Example input: player 2 roll during player 1's turn
* Example output: player 2 buttons disabled

The program changes turns when player roles 1
* Example input: roll = 1
* Example output: Sorry player you rolled 1

The program stores the player's round score when they hold and passes the turn
* Example input: player 1 hold
* Example output: player 1 buttons disabled and player 2 buttons disabled

The program ends the game when one player get's to 100
* Example input: player 1 total score > 99
* Example output: player 1 is the winner

## Setup/Installation Requirements
* https://github.com/maxwellkimutai/quiz-project
* cd quiz-project
* atom
* edit
* run index.html in browser using file path on your computer
## Known Bugs
None
## Technologies used
* HTML
* CSS
* JavaScript
* jQuery
* git
## Link To gh-pages
https://maxwellkimutai.github.io/quiz-project/
## Support and contact details
Contact Maxwell Kimutai on +254713510682
### License
MIT
Copyright (c) 2018 **Maxwell Kimutai**
