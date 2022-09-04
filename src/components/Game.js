import React from "react"
import Board from "./Board"

function Game() {
    const [gameWon, setGameWon] = React.useState(false)
    const [squares, setSquares] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [player1Turn, setPlayer1Turn] = React.useState(true)

    function newGame(){
        setSquares([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setGameWon(false)
        setPlayer1Turn(true)
    }

    React.useEffect(() => {
        let horStart = [0,3,6]
        let vertStart = [0,1,2]

        for (let index in horStart) {
            let id = (horStart[index])
            if ((squares[id] !== 0) && (squares[id+1] === squares[id]) && (squares[id+2] === squares[id])) {
                setGameWon(true)
            } 
        }
        for (let index in vertStart) {
            let id = (vertStart[index])
            if ((squares[id] !== 0) && (squares[id+3] === squares[id]) && (squares[id+6] === squares[id])) {
                setGameWon(true)
            } 
        }
        if ((squares[0] !== 0) && (squares[4] === squares[0]) && (squares[8] === squares[0])) {
            setGameWon(true)
        } 
        if ((squares[6] !== 0) && (squares[4] === squares[6]) && (squares[2] === squares[6])) {
            setGameWon(true)
        } 

        setPlayer1Turn(prev => !prev)

    }, [squares])


    function handleClick(id) {
        setSquares(prev => (prev.map((square, index) => {
            if (index === id && square === 0) {
                return player1Turn ? "X" : "O"
            } else {
                return square
            }
        })))
    }
    
    return (
        <div className="game">  
            <h1>{gameWon ? `Player ${player1Turn ? 1 : 2} wins` : player1Turn ? "Player 2 turn:" : "Player 1 turn:"}</h1>
            <Board handleClick={handleClick} squares={squares} gameWon={gameWon} />
            {gameWon && <button onClick={newGame} className="newGameBtn">New Game</button>}
        </div>
    )   
}

export default Game