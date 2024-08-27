/* eslint-disable react/prop-types */
const Cell = ({index, row, active, colors, onCellChange}) => {

    const color = colors[row][index]

    return(
        <input 
        onChange={(e) => onCellChange(row, index, e.target.value)}
        disabled={!active}
        data-row={row}
        data-index={index}
        className="w-full h-full text-center text-[5em] uppercase rounded-md text-gray-600" 
        style={{cursor: "pointer", color: color}}
        maxLength={1} type="text" />
    )
}

export default Cell