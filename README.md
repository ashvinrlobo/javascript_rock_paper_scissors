# Rock Paper Scissors Game

## Overview
This project is a simple implementation of the classic **Rock Paper Scissors** game. The game is played for 5 rounds, where the user competes against the computer. The user selects their choice by clicking one of the buttons (`Rock`, `Paper`, or `Scissors`), and the computer randomly generates its choice. The result of each round, along with the current scores, is displayed on the webpage.

---

## Project Structure
The project consists of three main files:
1. **`index.html`**: The HTML structure of the game.
2. **`styles.css`**: The CSS file for styling the game interface.
3. **`javascript.js`**: The JavaScript file containing the game logic.

---

## File Details

### 1. `index.html`
- **Purpose**: Provides the structure of the webpage.
- **Key Elements**:
  - A `<p>` element with the rules of the game.
  - A `<div>` container with three buttons (`Rock`, `Paper`, `Scissors`) for user input.
  - An unordered list (`<ul>`) to display the results of each round.

### 2. `styles.css`
- **Purpose**: Styles the game interface for a clean and user-friendly design.
- **Key Styles**:
  - `.container`: Centers the game elements vertically and horizontally.
  - `button`: Styles the buttons with padding, green background, and rounded corners.
  - `ul` and `li`: Formats the result list with proper alignment and spacing.
  - `#rules`: Highlights the game rules with a light green background.

### 3. `javascript.js`
- **Purpose**: Implements the game logic and handles user interactions.
- **Key Functions**:
  - `getComputerChoice()`: Randomly generates the computer's choice (`rock`, `paper`, or `scissors`).
  - `getHumanChoice()`: Waits for the user to click a button and resolves the user's choice.
  - `display_result(res, a, b, compscore, humanscore)`: Displays the result of each round and the current scores on the webpage.
  - `playGame()`: The main game loop that runs for 5 rounds, compares choices, updates scores, and calls `display_result()`.

---

## How It Works
1. **Game Start**:
   - The user clicks one of the buttons (`Rock`, `Paper`, or `Scissors`).
   - The computer randomly selects its choice.

2. **Round Result**:
   - The user's choice and the computer's choice are compared:
     - If both choices are the same, it's a tie.
     - Otherwise, the winner is determined based on the rules of Rock Paper Scissors:
       - Rock beats Scissors.
       - Scissors beats Paper.
       - Paper beats Rock.
   - The result of the round is displayed on the webpage, along with the updated scores.

3. **Game End**:
   - After 5 rounds, the game ends. The final scores are displayed, and the player with the higher score is the winner.

---

## Features
- **Interactive Buttons**: Users can select their choice by clicking buttons.
- **Dynamic Score Display**: The current scores are updated and displayed after each round.
- **Responsive Design**: The game interface is styled for a clean and user-friendly experience.

---

## How to Run
1. Open the `index.html` file in a web browser.
2. Read the rules displayed at the top of the page.
3. Click one of the buttons (`Rock`, `Paper`, or `Scissors`) to play.
4. View the results and scores displayed below the buttons after each round.
