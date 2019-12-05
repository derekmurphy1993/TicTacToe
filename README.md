# TIC TAC TOE

![Screenshot of Game](https://i.imgur.com/kXtgwHf.png)

This is Tic Tac Toe, a simple game in a single page application.\
_Experimenting with game logic, bootstrap, and an API._ \
[Play Tic Tac Toe in your browser.](https://derekmurphy1993.github.io/TicTacToe/)

## Logic and Problem Solving

In order to play the game, a user would first be required to sign in, creating a new account if needed. When a game is started, a new game board would appear. By selecting empty squares, the user could claim it, before giving the other player for a turn. First to get three in a row wins and ends the game. Once a winner is declared, the user can start a new game.\
Additional features include changing password, signing out, and see the total number of games played.

## The Process
I started with writing brief user stories and brainstorming potential solutions (documented below) to determine my goals and figure out the scope of the project. I determined the best way to start was to use bootstrap to creating a visual representation of the gameboard that the user would interact with. Using JavaScript for the game logic, conditions were set that switched between players after each successful move, prevented players from selecting taken squares, and checked for winning combos while giving the user feedback.\
Game logic was fun and came naturally to me, but passing that information to a back end was my major hurdle. User authentication, using form data, went smooth, but getting the game API to connect with the gameboard was my major hurdle. After many edits and attempts, I took an hour to reorganize my code and triple check for typos. With my mind and files clear, I was able to race to MVP and successfully got it properly updating by project deadline. If there was any one lesson I took from this project, it was to take the time to leave notes, keep the code clean and type carefully.

#### Technologies Used

1. HTML
1. CSS (Scss)
1. JavaScript
1. Bootstrap
1. Jquery
1. Node

## Future Goals

There is a lot of room for improvement I hope to resolve. The major challenges I'd like to revisit are:
  - Reprogramming a game counter that records wins, losses, and draws.
  - The ability to save and resume an unfinished match.
  - Clean styling to keep the structure of the page stable.
  - Multiplayer functionality.


## Planning & Brainstorm Documentation
#### User Stories

1. As a user, I want to create an account.
1. As a user, I want to log into my account.
1. As a user, I want to be able to change my password.
1. As a user, I want to be able to end my session with a signout.
1. As a player, I want to be able to make a move.
1. If I make an invalid move, I want to be told so.
1. As a player I want to know who's turn it is.
1. As a player I want to know when a game is won, and who won.
1. As a player I want to know how many games I played.

### wireframes

![Wireframes](https://i.imgur.com/IlDAv00.jpg)
![Wireframes](https://i.imgur.com/e34SleC.jpg)
