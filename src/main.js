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
    
    let boardCopy = board.slice("");

    while(returnWinner(boardCopy) === null){
        console.log(boardCopy);
        let randomMove = generateRandomMove(boardCopy);
        makeMove(boardCopy, startPlayer, randomMove[0], randomMove[1]);
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
    console.log('empty squares: ', emptySquares);

    let boardCopy = board.slice("");
    emptySquares.forEach(function(space){
        let newBoard = boardCopy.slice("");
        console.log('>>>>>', JSON.stringify(newBoard));
        makeMove(newBoard, player, space[0], space[1]);
        for(let k = 0; k < 3; k++){
            let result = playUntilWin(newBoard, player);
            console.log('>>>', result);
        }       
    });



}

let board = [
    [null, null, 'O'],
    [null, null, 'X'],
    [null, 'X', 'O'],
];

console.log(scoreBoard(board, 'O'));



