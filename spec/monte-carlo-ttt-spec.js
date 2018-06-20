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
