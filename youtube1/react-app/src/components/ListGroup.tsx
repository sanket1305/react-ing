import { Fragment, useState } from "react";

// we can pass data to componenet as an argument, for which we use prop
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem}: ListGroupProps) {
  // let selectedIndex = 0;
  // Hook
  // const  arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function\
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('') // example for string type

  const message = items.length === 0 ? <p>No item found</p> : null;

  // functions are useful if we want to pass parameters
  // if you don't have any parameters, then it's convinient to use variables like above 'message'
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    // we can also use <> </> to use fragments without actually importing them
    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
