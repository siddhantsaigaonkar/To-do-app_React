function TodoItem1() {

  let todoName = "Buy Milk";
  let todoDate = "03/03/2024";
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem1