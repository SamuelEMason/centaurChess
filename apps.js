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
			square.id = `${fileLetter[i]}${j + 1}`
			square.style.gridArea = square.id
			board.appendChild(square);

			square = document.createElement('div');
			square.className = color2;
			square.classList.add('square');
			square.id = `${fileLetter[i]}${j + 2}`
			square.style.gridArea = square.id
			board.appendChild(square);
		}
	}	
	notateBoard();
	console.log(document.getElementsByClassName('piece'));
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

function initializePieces() {
	let fileLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	for(let i = 0; i < 8; i++) {
		addPiece(`${fileLetter[i]}2`, 'images/piece-icons/white-pawn.png');
		addPiece(`${fileLetter[i]}7`, 'images/piece-icons/black-pawn.png');
	}
	addPiece(`${fileLetter[0]}1`, 'images/piece-icons/white-rook.png');
	addPiece(`${fileLetter[0]}8`, 'images/piece-icons/black-rook.png');
	addPiece(`${fileLetter[1]}1`, 'images/piece-icons/white-knight.png');
	addPiece(`${fileLetter[1]}8`, 'images/piece-icons/black-knight.png');
	addPiece(`${fileLetter[2]}1`, 'images/piece-icons/white-bishop.png');
	addPiece(`${fileLetter[2]}8`, 'images/piece-icons/black-bishop.png');
	addPiece(`${fileLetter[3]}1`, 'images/piece-icons/white-queen.png');
	addPiece(`${fileLetter[3]}8`, 'images/piece-icons/black-queen.png');
	addPiece(`${fileLetter[4]}1`, 'images/piece-icons/white-king.png');
	addPiece(`${fileLetter[4]}8`, 'images/piece-icons/black-king.png');
	addPiece(`${fileLetter[5]}1`, 'images/piece-icons/white-bishop.png');
	addPiece(`${fileLetter[5]}8`, 'images/piece-icons/black-bishop.png');
	addPiece(`${fileLetter[6]}1`, 'images/piece-icons/white-knight.png');
	addPiece(`${fileLetter[6]}8`, 'images/piece-icons/black-knight.png');
	addPiece(`${fileLetter[7]}1`, 'images/piece-icons/white-rook.png');
	addPiece(`${fileLetter[7]}8`, 'images/piece-icons/black-rook.png');
	
}

function addPiece(location, url) {
	let targetSquare = document.getElementById(location);
	let newPiece = document.createElement('div');
	newPiece.className = 'piece';
	newPiece.style.backgroundImage = `url(${url})`;
	targetSquare.appendChild(newPiece);
}


function Piece(url, location) {
	this.url = url;
	this.location = location;
}

document.body.addEventListener('onload', renderBoard());
initializePieces();