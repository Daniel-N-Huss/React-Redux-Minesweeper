# Description:

* Title - React Minesweeper
* Description - A single-player minesweeper game built with React/Redux
* Audience - Xerris hiring team, myself

# Project Specs

As noted by Xerris

* 16 x 16 tile game board
* Randomly hide 40 bombs behind the tiles
* Show the number of bombs adjacent to an uncovered tile
* Allow the user to 'flag' a tile as having a bomb underneath
* If the user clicks on a tile with a bomb it's game over!
* Run from terminal
* Stack:
  * React, Redux
  * Stretch: node/express
  * Storybook for Component Testing
  * Jest for unit testing

Stretch Specs: 

* Automated unit testing
* A node/express REST API to save and report high scores

## Primary Project Considerations

As noted by Xerris

* How are components organized, and broken down for modularity / reusability?
* How is state passed to components and tracked for counts?
* How is styling managed? 
* How complex are the functions to display a cell?
* How is redux storing data?


# User Stories: 



* A **_user_** should be able to see a game **_board_** with 16x16 **_tiles_**
* A user should be able to click to reveal a tile:
  * Revealing a bomb will end the **_game_**.
  * Revealing a 'blank' tile will show a number indicating the number of adjacent bombs. If a tile has no adjacent bombs, reveal neighboring tiles
* A user should be able to right click to 'flag' a tile
* A user should be able to see a **_timer_**, indicating how long they have been playing the current game.
* a user should be able to see a **_count_**, indicating how many bombs remain 'undiscovered' on the field
* (Stretch) A user should be able to see a list of high scores (lowest times)
* (Stretch) A user should be able to submit scores when they win the game


# Entities and their States:

Taken from user stories

* User / Game
* Board
* Tile
  * Revealed - True / False
  * Bomb - True / False
    * If false - Adjacent Bombs Count
* Timer
* Counter


# Components

* Game
  * NavBar
    * Timer
    * Counter
  * Board
    * X rows
      * X Buttons per row
    * X * X Tiles


# Game Loop


Initial State:
- Unrevealed board
- Timer at 0
- Count at 40

Active State: 
- Begins when user reveals their first tile
- Timer counts up every second


"Game Over" State:
- A tile with a bomb is revealed
- Active State = False
  - Timer stops counting
- Reset game button appears / activates
- 'Game Over' indicator --> original game has the (x.x) emoji 

"Victory" State:
- All 'safe' tiles are revealed
- Active State = False
  - Timer stops counting
- Reset game button appears / activates
- Victory Indicator --> original game has the sunglasses emoji


Initial Inactive Board --> Active Board --> Game Over / Victory Inactive Board --> Reset to Initial