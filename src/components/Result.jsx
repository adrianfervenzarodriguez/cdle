/* eslint-disable react/prop-types */
const Result = ({success, word, description}) => {
    const classColor = success ? "text-green-600" : "text-red-600"
    return(
        <div className={`mt-4 p-4 bg-slate-200 font-semibold text-xl rounded-md ${classColor}`}>
            {`${word} - ${description}`}
        </div>
    )
}

export default Result