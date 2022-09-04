import React from "react"
import Board from "./Board"

function Game() {
    const [gameWon, setGameWon] = React.useState(false)
    const [squares, setSquares] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [player1Turn, setPlayer1Turn] = React.useState(true)

    React.useEffect(() => {
        let horStart = [0,3,6]
        for (let index in horStart) {
            let id = (horStart[index])
            if ((squares[id] !== 0) && (squares[id+1] === squares[id]) && (squares[id+2] === squares[id])) {
                setGameWon(true)
            } 
        }
        setPlayer1Turn(prev => !prev)

    }, [squares])

    React.useEffect(() => {
        gameWon !== false && console.log(player1Turn, "wins")
    }, [gameWon])

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
        <Board handleClick={handleClick} squares={squares} />
    )   
}

export default Game