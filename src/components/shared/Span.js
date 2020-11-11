import React from 'react'

const Span = ({onClickFromDelete, value, id, deleteClassName}) => {
    return (
        <span onClick={() => onClickFromDelete(id)}
                className={deleteClassName}
                
                 >{value}
        </span>
    )
}

export default Span;