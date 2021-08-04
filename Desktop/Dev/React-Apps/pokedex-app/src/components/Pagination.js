import React from 'react'

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
      <div className="pagination">
        <button className="btn-left" onClick={onLeftClick}>{"<"}</button>
        <div>{page} de {totalPages}</div>
        <button className="btn-right" onClick={onRightClick}>{">"}</button>
      </div>
    );
 }


export default Pagination;