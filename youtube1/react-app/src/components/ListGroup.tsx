import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const message = items.length === 0 ? <p>No item found</p> : null;

  // functions are useful if we want to pass parameters
  // if you don't have any parameters, then it's convinient to use variables like above 'message'
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }

  return (
    // we can also use <> </> to use fragments without actually importing them
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
