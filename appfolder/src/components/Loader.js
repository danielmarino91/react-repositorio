import React from 'react'

const Loader = () => {
    return (
        <svg className="circleLoader">
            <g className="circles">
                <circle cx="125" cy="125" r="50" fill="none" strokeWidth="15px" stroke="#E0E3E9">
                </circle>
                <circle id="inner" cx="125" cy="125" r="50" fill="none" strokeWidth="12px" stroke="#94c132">
                </circle>
            </g>
        </svg>
    )
}

export default Loader