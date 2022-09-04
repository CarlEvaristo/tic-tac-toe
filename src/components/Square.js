import React from "react"

function Square({onClick, value, index, gameWon}) {
    return <button onClick={() => onClick(index)} className="square" disabled={gameWon}>{value === 0 ? "" : value}</button>
}

export default Square
