import React from "react"
import Board from "./Board"
import Confetti from 'react-confetti'

function Game() {
    const [gameWon, setGameWon] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)
    const [squares, setSquares] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [playerTurn, setPlayerTurn] = React.useState(true)

    function newGame(){
        setSquares([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setGameWon(0)
        setGameOver(false)
        setPlayerTurn(true)
    }

    React.useEffect(() => {
        let horStart = [0,3,6]
        let vertStart = [0,1,2]

        for (let index in horStart) {
            let id = (horStart[index])
            if ((squares[id] !== 0) && (squares[id+1] === squares[id]) && (squares[id+2] === squares[id])) {
                setGameWon([id, id+1, id+2])
            } 
        }
        for (let index in vertStart) {
            let id = (vertStart[index])
            if ((squares[id] !== 0) && (squares[id+3] === squares[id]) && (squares[id+6] === squares[id])) {
                setGameWon([id, id+3, id+6])
            } 
        }
        if ((squares[0] !== 0) && (squares[4] === squares[0]) && (squares[8] === squares[0])) {
            setGameWon([0,4,8])
        } 
        if ((squares[6] !== 0) && (squares[4] === squares[6]) && (squares[2] === squares[6])) {
            setGameWon([6,4,2])
        } 

        if (!squares.includes(0) && !gameWon) {     
            console.log(squares)
            setGameOver(true)
        }
    }, [squares])


    function handleClick(id) {
        setSquares(prev => (prev.map((square, index) => {
            if (index === id && square === 0) {
                setPlayerTurn(prev => !prev)        
                return playerTurn ? "x" : "o"
            } else {
                return square
            } 
        })))
    }
    
    return (
        <div className="game">  
            {(gameWon !== 0) && <Confetti />}
            <h1>Tic Tac Toe</h1>
            {gameWon ? <h2>Player {playerTurn ? 2 : 1} wins </h2> :
            gameOver ? <h2>Game Over</h2> :
            playerTurn ? <h2>Player 1:</h2> : 
            <h2>Player 2:</h2>
            }
  
            <Board  handleClick={handleClick} squares={squares} gameWon={gameWon} />
            {(gameWon || gameOver) && <button onClick={newGame} className="newGameBtn">New Game</button>}

            {/* {gameWon ? <Board  handleClick={handleClick} squares={squares} gameWon={gameWon} /> :
            gameOver ? <Board  handleClick={handleClick} squares={squares} gameWon={gameWon} /> :
            <h2>choose a square</h2> */}
        </div>
    )   
}

export default Game