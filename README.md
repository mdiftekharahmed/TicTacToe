# Tic-Tac-Toe (Vanilla HTML/CSS/JS)

A simple Tic-Tac-Toe game implemented with three files: `index.html`, `style.css`, and `script.js`.  
Works in any modern browser — no build tools required.

## Repo structure
/tic-tac-toe
├─ index.html
├─ style.css
└─ script.js



## Features
- 2-player local game (Player X and Player O)
- Highlights winning line
- Shows current player and game status
- Reset / New game button
- Simple, responsive layout that works on desktop and mobile

## How to run
1. **Open locally**  
   Simply open `index.html` in your browser (double-click or right-click → Open with...).

2. **Or run a lightweight local server** (recommended if you want proper URL behavior):
   - Using Python 3:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

## How to play
- Click an empty cell to place the current player's mark (X or O).
- The game automatically checks for a winner or a draw.
- Click **Reset** to clear the board and start a new game.

## Files description
- `index.html` — HTML markup and game board.
- `style.css` — Styling and responsive layout.
- `script.js` — Game logic, event handling, win/draw detection, and UI updates.

## Customize
- Change styles in `style.css` to adjust colors, sizes, or layout.
- Extend `script.js` to add AI (single-player), scorekeeping between rounds, or animations.

## Contributing
Small project — feel free to:
- Improve styles or accessibility
- Add single-player AI opponent
- Add score tracking or player names

## License
MIT License — see `LICENSE` (or add the following notice in your repo):
