## Overview
This is a simple javascript code to be run on the console. The game lasts for 5 round where the user will be playing against the computer.

## Functions

### 1. `getComputerChoice()`
- **Description**: Generates a random choice for the computer: "rock", "paper", or "scissors".
- **Logic**:
  - A random number between 0 and 1 is generated using `Math.random()`.
  - The number is scaled and floored to produce an integer between 0 and 2.
  - Based on the integer value:
    - `0` corresponds to "rock".
    - `1` corresponds to "paper".
    - `2` corresponds to "scissors".
- **Returns**: A string representing the computer's choice ("rock", "paper", or "scissors").

  ### 2. `getHumanChoice()`
- **Description**: Prompts the user to input their choice of "rock", "paper", or "scissors".
- **Logic**:
  - The user is prompted to enter their choice.
  - The input is converted to lowercase for consistency.
  - If the input is valid ("rock", "paper", or "scissors"), it is returned.
  - If the input is invalid, an alert is shown, and the function recursively calls itself to prompt the user again.
- **Returns**: A string representing the human's choice ("rock", "paper", or "scissors").

## Example Execution
1. The computer randomly selects "rock", "paper", or "scissors".
2. The user is prompted to input their choice.
3. This process repeats for 5 rounds.
4. The winner is determined at the end of the 5 rounds.
