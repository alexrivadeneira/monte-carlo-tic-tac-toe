function returnWinner(board){
    let rows = board.length;
    let cols = board[0].length;

    // check each row
    for(let i = 0; i < rows; i++){
        // console.log('running');
        // console.log('got here', board[i][0], board[i][1], board[i][2]);
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


function makeRandomMove(board, player){
    let rows = board.length;
    let randomRow = Math.floor(Math.random() * rows);
    let randomCol = Math.floor(Math.random() * rows);

    while(board[randomRow][randomCol] !== null){
        let randomRow = Math.floor(Math.random() * rows);
        let randomCol = Math.floor(Math.random() * rows);        
    }
    return [randomRow, randomCol];
}


function playUntilWin(board, startPlayer){
    // TODO: Need to account for tie
    while(returnWinner(board) === null){
        makeRandomMove(board, startPlayer);
        if(startPlayer === 'X'){
            startPlayer = 'O';
        } else {
            startPlayer = 'X';
        }
        console.log('currBoard: ', board);
    }
    console.log('WINNER: ', returnWinner(board));
}

function scoreBoard(player, board){
    let scoredBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    // for each null area on the board, play some random games until the game is over
    // for each game that results in a win for the player, add 1 to the scored section
    // for each game that results in a lose for the player, add -1 to the square
}



