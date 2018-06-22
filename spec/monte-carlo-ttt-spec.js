// TODO: Dry up testing code using Before/BeforeEach

describe("returnWinner", function(){
	it("should return the correct winner", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
		let winner = null;
		
		expect(returnWinner(board)).toEqual(winner);
	});

	it("should return the correct winner", function(){
		let board = [
			['X', 'X', 'X'],
			[null, 'O', 'O'],
			['O', null, null],
		];
		let winner = 'X';
		
		expect(returnWinner(board)).toEqual(winner);
	});

	it("should return the correct winner", function(){
		let board = [
			['O', 'X', 'O'],
			['O', 'X', 'O'],
			['O', null, 'X'],
		];		
		let winner = 'O';
		
		expect(returnWinner(board)).toEqual(winner);
	});

	it("should return the correct winner", function(){
		let board = [
			[null, 'X', 'O'],
			[null, 'X', 'O'],
			['O', null, 'X'],
		];
		let winner = null;
		
		expect(returnWinner(board)).toEqual(winner);
	});

	it("should return the correct winner", function(){
		let board = [
			[null, 'X', 'O'],
			[null, 'X', 'O'],
			['', null, 'X'],
		];
		let winner = null;
		
		expect(returnWinner(board)).toEqual(winner);
	});

	it("should return the correct winner", function(){
		let board = [
			['X', 'X', 'O'],
			[null, 'X', 'O'],
			['', null, 'X'],
		];
		let winner = 'X';
		
		expect(returnWinner(board)).toEqual(winner);
	});

});


describe("isFullBoard", function(){
	it("should return whether the board is full or not", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
	
		expect(isFullBoard(board)).toEqual(false);
	});

	it("should return whether the board is full or not", function(){
		let board = [
			['X', null, 'X'],
			[null, 'O', 'X'],
			[null, null, 'X'],
		];
	
		expect(isFullBoard(board)).toEqual(false);
	});

	it("should return whether the board is full or not", function(){
		let board = [
			['X', 'O', 'X'],
			['O', 'O', 'X'],
			['O', null, 'X'],
		];
	
		expect(isFullBoard(board)).toEqual(false);
	});


	it("should return whether the board is full or not", function(){
		let board = [
			['X', 'O', 'X'],
			['O', 'O', 'X'],
			['O', 'X', 'X'],
		];
	
		expect(isFullBoard(board)).toEqual(true);
	});

});



describe("occupiedSquares", function(){
	it("should return occupied squares", function(){
		let board = [
			['X', null, null],
			[null, 'O', null],
			[null, 'X', 'X'],
		];
		let occupiedSquares = [[0,0],[1,1],[2,1],[2,2]];
		
		expect(getOccupiedSquares(board)).toEqual(occupiedSquares);
	});

	it("should return occupied squares", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
		let occupiedSquares = [];
		
		expect(getOccupiedSquares(board)).toEqual(occupiedSquares);
	});
	
});


describe("getEmptySquares", function(){
	it("should return the correct empty squares", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];

		let emptySquaresCollection = [
			[0,0],[0,1],[0,2],
			[1,0],[1,1],[1,2],
			[2,0],[2,1],[2,2],
		];
	
		expect(getEmptySquares(board)).toEqual(emptySquaresCollection);
	});

	it("should return the correct empty squares", function(){
		let board = [
			['X', null, null],
			[null, 'O', null],
			[null, null, 'X'],
		];

		let emptySquaresCollection = [
			[0,1],[0,2],
			[1,0],[1,2],
			[2,0],[2,1],
		];
	
		expect(getEmptySquares(board)).toEqual(emptySquaresCollection);
	});	

	it("should return the correct empty squares", function(){
		let board = [
			['X', 'O', 'X'],
			['X', 'O', null],
			['O', 'X', 'X'],
		];

		let emptySquaresCollection = [
			[1,2],
		];
	
		expect(getEmptySquares(board)).toEqual(emptySquaresCollection);
	});	

	it("should return the correct empty squares", function(){
		let board = [
			['X', 'O', 'X'],
			['X', 'O', 'X'],
			['O', 'X', 'X'],
		];

		let emptySquaresCollection = [];
	
		expect(getEmptySquares(board)).toEqual(emptySquaresCollection);
	});			
});




describe("generateRandomMove", function(){
	it("should return an open space", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];

		let randomMove = generateRandomMove(board);
	
		expect(randomMove[0] >= 0 && randomMove[0] <= 2 && randomMove[1] >= 0 && randomMove[0] <= 2).toBeTruthy();
	});

	it("should return an open space", function(){
		let board = [
			[null, null, null],
			['X', 'O', 'X'],
			['O', 'X', 'O'],
		];

		let randomMove = generateRandomMove(board);
	
		expect(randomMove[0] === 0 && randomMove[1] >= 0 && randomMove[0] <= 2).toBeTruthy();
	});	

	it("should return an open space", function(){
		let board = [
			[null, 'X', 'O'],
			['X', 'O', 'X'],
			['O', 'X', 'O'],
		];

		let expectedMove = [0,0];
	
		expect(generateRandomMove(board)).toEqual(expectedMove);

	});	

	it("should return an open space", function(){
		let board = [
			['O', 'X', 'O'],
			['X', 'O', 'X'],
			['O', 'X', 'O'],
		];

		let expectedMove = null;
	
		expect(generateRandomMove(board)).toEqual(expectedMove);

	});		

});

describe("scoreBoard", function(){

	it("should generally prioritize the middle square", function(){
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];

		let scoredBoard = scoreBoard(board, 'X');
	
		expect(scoredBoard[1][1] >= scoredBoard[0][0] || scoredBoard[1][1] >= scoredBoard[2][2]).toBeTruthy();
	});

	it("should pick an obviously good square", function(){
		let board = [
			['X', 'O', null],
			['X', 'O', null],
			[null, null, 'O'],
		];

		let scoredBoard = scoreBoard(board, 'X');
	
		expect(scoredBoard[2][0] >= scoredBoard[0][2]).toBeTruthy();
	});

});


describe("getBestScoredPosition", function(){
	it("return the position with the highest score", function(){
		let scoredBoard = 
			[
				[null, 0, -10], 
				[0, 15, 0], 
				[-11, null, null],
			];

		let highestScoredPosition = [1,1];
		
		expect(getBestScoredPosition(scoredBoard)).toEqual(highestScoredPosition);
	});

	it("return the position with the highest score", function(){
		let scoredBoard = 
			[
				[-25, null, null], 
				[null, null, null], 
				[0, null, null],
			];

		let highestScoredPosition = [2,0];
		
		expect(getBestScoredPosition(scoredBoard)).toEqual(highestScoredPosition);
	});
	
});