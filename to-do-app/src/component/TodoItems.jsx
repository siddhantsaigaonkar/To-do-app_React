import React from 'react'

export default function TodoItems({ todoName ,todoDate}) {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
