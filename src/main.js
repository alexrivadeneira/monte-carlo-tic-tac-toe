function returnWinner(board){
    let rows = board.length;
    let cols = board[0].length;

    // check each row
    for(let i = 0; i < rows; i++){
        if(board[i][0] === board[i][1] && board[i][0] === board[i][2]){
            return board[i][0];
        }
        else if(board[0][i] === board[1][i] && board[0][i] === board[2][i]){
            return board[0][i];
        }   
    }

    if(board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        return board[0][0];
    }

    if(board[0][2] === board[1][1] && board[0][2] === board[2][0]){
        return board[0][2];
    }

    if(isFullBoard(board)){
        return 'tie';
    }
    
    return null;
}

function isFullBoard(board){
    let nullCount = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === null){
                nullCount++;
            }
        }
    }
    if(nullCount > 0){
        return false;
    }
    return true;
}

function getEmptySquares(board){
    let emptySquares = [];
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === null){
                emptySquares.push([i, j]);
            }
        }
    }
    return emptySquares;
}


function generateRandomMove(board){
    let emptySquares = getEmptySquares(board);
    // console.log(emptySquares.length);

    if(emptySquares.length === 0){
        return null;
    }
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

function makeMove(board, player, row, col){
    // console.log(JSON.stringify(board));
    // console.log('Moving ', player, ' to ', row, col);
    board[row][col] = player;

}


function playUntilWin(board, startPlayer){
    
    let boardCopy = board.slice();

    while(returnWinner(board) === null){
        let boardCopy = board.slice();
        let randomMove = generateRandomMove(boardCopy);
        // console.log(randomMove);
        makeMove(boardCopy, startPlayer, randomMove[0], randomMove[1]);
        console.log(JSON.stringify(boardCopy));
        startPlayer === 'X' ? startPlayer = 'O' : startPlayer = 'X';
    }

    return returnWinner(boardCopy);
}

function scoreBoard(board, player){
    let scoredBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    let opponent;
    player === 'X' ? opponent = 'O' : opponent = 'X';

    let scoreConverter = {
        player: 1,
        opponent: -1,
        tie: 0,
    };

    let emptySquares = getEmptySquares(board);
    // console.log('empty squares: ', emptySquares);

    let boardCopy = board.slice("");
    emptySquares.forEach(function(space){
        let newBoard = boardCopy.slice("");
        console.log('>>>>>', JSON.stringify(newBoard));
        makeMove(newBoard, player, space[0], space[1]);
        for(let k = 0; k < 3; k++){
            let result = playUntilWin(newBoard, opponent);
            console.log('simulation winner:', result);
        }       
    });



}

let testingBoard = [
    [null, null, 'O'],
    [null, 'O', 'O'],
    [null, 'X', 'X'],
];

function deepCopyBoard(board){
    let boardCopy = [];
    for(let i = 0; i < board.length; i++){
        boardCopy[i] = board[i].slice();
    }
    return boardCopy;
}

// console.log(scoreBoard(board, 'O'));

// playUntilWin(board, 'X');

// console.log('>>>', testingBoard);



    var result = playUntilWin(deepCopyBoard(testingBoard), 'X');
    console.log('>>>', testingBoard);

    var result2 = playUntilWin(deepCopyBoard(testingBoard), 'X');
    console.log('>>>', testingBoard);

    var result3 = playUntilWin(deepCopyBoard(testingBoard), 'X');
    console.log('>>>', testingBoard);

    console.log('simulation winner:', result, result2, result3);

// console.log('>>>', playUntilWin(board, 'X'));