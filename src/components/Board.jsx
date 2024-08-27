/* eslint-disable react/prop-types */
import Row from "./Row"
import Cell from "./Cell"
import Result from "./Result"
import { useState } from "react"

const Board = ({word, description}) => {

    const nRows = Array.from(Array(5).keys())
    const nCells = Array.from(Array(5).keys())

    const initialBoard = [
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
    ]

    const initialColors = [
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
        Array(5).fill(''),
    ]

    const [colors, setColors] = useState(initialColors)
    const [board, setBoard] = useState(initialBoard)
    const [currentRow, setCurrentRow] = useState(0)
    const [finish, setFinish] = useState(false)
    const [success, setSuccess] = useState(false)

    const onCellChange = (row, cell, value) => {
        const newBoard = [...board]
        newBoard[row][cell] = value
        setBoard(newBoard)
    }

    const handleSubmit = () => {
        if (board[currentRow].filter(Boolean).length == 5){
            setCurrentRow(old => old == 4 ? 4 : old + 1)
            const newColors = [...colors]
            board.forEach((row, i) => {
                if (i == currentRow){
                    row.forEach((cell, j) => {
                        if (word.includes(cell)){
                            if (word.charAt(j) == cell){
                                newColors[i][j] = '#06d444'
                            }else{
                                newColors[i][j] = '#f8ce13'
                            }
                        }else{
                            newColors[i][j] = ''
                        }
                    })
                    setColors(newColors)
                }
            });

            if (word == board[currentRow].join('')){
                setSuccess(true)
                setFinish(true)
            }

            if (currentRow + 1 == 5){
                setSuccess(false)
                setFinish(true)
            }

        }
    }

    return(
        <>
        <div>
            {
                finish && <Result success={success} word={word} description={description}/>
            }
        </div>
        <div className="flex flex-row bg-slate-200 h-fit w-4/12 mt-8 rounded-md">
            <div className="grid grid-rows-5 w-full h-full p-4 gap-1">
                {
                    nRows.map(_row => {
                        return (
                            _row <= currentRow ?
                            <Row key={_row} row={_row}>
                                { nCells.map(_cell => {return (<Cell key={`${_row}-${_cell}`} index={_cell} row={_row} active={!finish && _row == currentRow} colors={colors} onCellChange={onCellChange}/>)}) }
                            </Row>
                            : null
                        )
                    })
                }
            </div>
        </div>
        <div className="flex flex-row h-fit w-4/12 mt-4 rounded-md ms-4">
            <button disabled={finish} className="text-lg font-semibold bg-slate-400 p-2 rounded-md w-28" onClick={handleSubmit}>Submit</button>
        </div>

        </>
    )
}

export default Board