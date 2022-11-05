/* 
	Function generates html elements representing the game board.
		- 	8 square objects populate each of 8 rank objects
		-	Algebraic notation is notated where necessary
*/
function renderBoard() {

	let fileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	let color1, color2;
	let boardArea = document.getElementById('board-area');

	let board = document.getElementById('board');

	for (let i = 0; i < 8; i++) {

		if ( i % 2 == 0) {
			color1 = 'light-square';
			color2 = 'dark-square';
		}
		else {
			color1 = 'dark-square';
			color2 = 'light-square';
		}

		for(let j = 0; j < 8; j += 2) {
			
			let square = document.createElement('div');
			square.className = color1;
			square.id = `${fileLetter[i]}${j + 1}`
			square.style.gridArea = square.id
			board.appendChild(square);

			square = document.createElement('div');
			square.className = color2;
			square.id = `${fileLetter[i]}${j + 2}`
			square.style.gridArea = square.id
			board.appendChild(square);
		}
	}	
	notateBoard();
	console.log(board);
}
/*
	Function notates square with the given file lettering or rank number
		- 	notation: string -> lettering or numbering to be notated
		- 	type: string -> either file or rank styling, used for positioning
 */
function notateBoard () {
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



const startingPositions = {
	whiteRook: ['a1', 'h1'],
	whiteKnight: ['b1', 'g1'],
	whiteBishop: ['c1', 'f1'],
	whiteQueen: 'd1',
	whiteKing: 'e1',
	whitePawn: ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
	blackRook: ['a8', 'h8'],
	blackKnight: ['b8', 'g8'],
	blackBishop: ['c8', 'f8'],
	blackQueen: 'd8',
	blackKing: 'e8',
	blackPawn: ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
}

document.body.addEventListener('onload', renderBoard());
