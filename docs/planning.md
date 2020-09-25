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


# State Management

Overall I think this app could be built without a state management tool, relying on props and prop drilling to manage state for the whole app. 
Still, I'm excited to learn Redux and the project spec calls for it to be used.


Reducers should be able to target adjacent tiles, perhaps by an ID, to reveal all the neighboring 'safe' tiles.

Redux says global state goes in the store.

Possible global states: 

- The current state of the game loop (initial, active, victory, game over)
- A decrementing flag counter for how many mines 'remain' after right clicking to set flags
- A dispatch that handles when the game 'ends' --> whether a mine has been clicked, or all safe tiles are revealed?
- Reveal tile dispatch for uncovering safe neighbour tiles



# Questions for Review:

* I've created a 2d array to represent the game board. Would one possible option to overcome this be creating that 2d array to give to
my React components to map out the child components, but somehow be passing the array data points as a reference to an lookup object
so I don't have to do nested loops when I want to modify each tile's state be an approach?