/* eslint-disable react/prop-types */

const Row = ({children, row}) => {

    return(
        <div data-row={row} className="w-full rounded-md grid grid-cols-5 gap-1">
            { children }
        </div>
    )
}

export default Row