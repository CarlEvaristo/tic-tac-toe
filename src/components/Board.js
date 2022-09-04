import React from "react"
import Square from "./Square"

function Board ({ handleClick, squares }) {
    return( 
        <div className="gameBoard">
            {squares.map((square, index) => {
                return <Square key={index} onClick={handleClick} value={square} index={index}  />
            })}

        </div>
    )
}

export default Board