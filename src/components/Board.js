import React from "react"
import Square from "./Square"

function Board ({ handleClick, squares, gameWon }) {
    return( 
        <div className="gameBoard">
            {squares.map((square, index) => {
                return <Square key={index} onClick={handleClick} value={square} index={index} gameWon={gameWon} />
            })}

        </div>
    )
}

export default Board