class Board {


	pieces = [];
	fileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	constructor() {
		this.#renderBoard();
		this.#initializePieces();
	}


	/* 
		Method generates html elements representing the game board.
			- 	8 square objects populate each of 8 rank objects
			-	Algebraic notation is notated where necessary
	*/
	#renderBoard() {
		let color1, color2;
		let boardArea = document.getElementById('board-area');
	
		let board = document.getElementById('board');
	
		for (let i = 0; i < 8; i++) {
	
			if ( i % 2 == 0) {
				color1 = 'dark-square';
				color2 = 'light-square';
			}
			else {
				color1 = 'light-square';
				color2 = 'dark-square';
			}
	
			for(let j = 0; j < 8; j += 2) {
				
				let square = document.createElement('div');
				square.className = color1;
				square.classList.add('square');
				square.id = `${this.fileLetter[i]}${j + 1}`
				square.style.gridArea = square.id
				board.appendChild(square);
	
				square = document.createElement('div');
				square.className = color2;
				square.classList.add('square');
				square.id = `${this.fileLetter[i]}${j + 2}`
				square.style.gridArea = square.id
				board.appendChild(square);
			}
		}	
		this.notateBoard();
	}

	/*
	Function notates square with the given file lettering or rank number
		- 	notation: string -> lettering or numbering to be notated
		- 	type: string -> either file or rank styling, used for positioning
 */
notateBoard () {
	let fileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	let boardContainer = document.getElementById('board-container')
	for (let i = 0; i < 8; i++) {
		let rank = document.createElement('span');
		rank.textContent = 8 - i;
		rank.style.gridArea = `${i + 2}`;
		rank.className = 'rank-notation';
		boardContainer.appendChild(rank);
	}

	for (let i = 0; i < 8; i++) {
		let file = document.createElement('span');
		file.textContent = fileLetter[i];
		file.style.gridArea = `${fileLetter[i]}`;
		file.className = 'file-notation';
		boardContainer.appendChild(file);
	}
}

	#initializePieces() {
		let pieceType = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

		for (let i = 0; i < 16; i++) {

			if(i < 8) {
				this.pieces.push(new Piece('pawn', 'white', `${this.fileLetter[i % 8]}2`));
				this.pieces.push(new Piece('pawn', 'black', `${this.fileLetter[i % 8]}7`));
			}
			else {
				this.pieces.push(new Piece(pieceType[i % 8], 'white', `${this.fileLetter[i % 8]}1` ));
				this.pieces.push(new Piece(pieceType[i % 8], 'black', `${this.fileLetter[i % 8]}8` ));
			}
		}
	}
}

class Piece {

	type;
	color;
	location;
	imageURL;

	constructor(type, color, location) {
		this.type = type;
		this.color = color;
		this.location = location;
		this.#generatePiece(this.type, this.color, this.location);
	}

	move(newLocation) {
		document.getElementById(`${this.type}-${this.location}`).remove();
		this.location = newLocation;
		this.#generatePiece(this.type, this.color, this.location);
	}

	#generatePiece(type, color, location) {
		let newPiece = document.createElement('div');
		newPiece.id = `${type}-${location}`;
		newPiece.className = 'piece';
		newPiece.style.backgroundImage = `url(images/piece-icons/${color}-${type}.png)`;
		document.getElementById(this.location).appendChild(newPiece);
	}
}

let board = new Board();