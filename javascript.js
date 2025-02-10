
const Game = (()=> {
const gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameStarted = false;
let gameover = false;

    let player1;
    let player2;
    let currentPlayer;

    //FUNCTION CREATE PLAYER
    const createPlayer = ( (name, mark)=> {
    return { name,
             mark
    }}
    );

    //FUNCTION CHECK FOR WIN
    const checkForWin = ()=> {
        const winningCombinations = [[0, 1, 2],
                                     [3, 4, 5],
                                     [6, 7, 8],
                                     [0, 3, 6],
                                     [1, 4, 7],
                                     [2, 5, 8],
                                     [0, 4, 8],
                                     [2, 4, 6]];
        for(i=0;i < winningCombinations.length; i++){
         const [a, b, c] = winningCombinations[i];
            if (gameBoard[a] != "" && gameBoard[a] == gameBoard[b] && gameBoard [a] == gameBoard[c]){
                    console.log(`${currentPlayer.name} wins!`);
                    gameover = true;
                }
        }
        };


    //FUNCTION HANDLECLICK
    const handleClick = ((square, index)=>{
        //check for win once clicked
        if (gameover == true){
            return;
        }
        gameBoard[index] = currentPlayer.mark;
        square.innerHTML = currentPlayer.mark;
        console.log(index);
        checkForWin();
        //CHANGE CURRENTPLAYER
        if (currentPlayer == player1){
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }

    });

const render = (()=>{
    //BOARD AND SQUARES CREATION
    // Also identification of each square by class and index
    const board = document.querySelector(".gameboard");
    let i = 1;
    if(gameStarted == false){
    gameBoard.forEach( (item, index)=> {
        const square = document.createElement("div");
        square.className = "square";
        board.appendChild(square);
        square.id = `square-${index}`;
        console.log(square);
        console.log(index);
        i++;

        //EACH TIME CLICK AT A SQUARE
        square.addEventListener ("click", () => {
            if(gameover == false){
            handleClick(square, index)}
        }
    );
    });
    gameStarted = true;
    }

    //RESTART BUTTON
    const restartBtn = document.querySelector("#restart");
    restartBtn.addEventListener("click", ()=>{
    gameover = false;
    gameStarted = false;
    gameBoard.fill("");
    const board = document.querySelector(".gameboard");
    board.innerHTML = "";
    // location.reload(true);
    render();
    });

    //CODE TO CREATE PLAYER
    const createPlayers = (()=>{
    player1 = createPlayer(document.querySelector("#player-1").value, "X");
    player2 = createPlayer(document.querySelector("#player-2").value, "O"); 
    console.log(player1, player2);
    currentPlayer = player1;
    }
    )();

});
    //START BUTTON
    const startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", render);
})();