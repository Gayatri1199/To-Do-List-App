import React, { useState } from "react";
import ToDoList from "./todolist";
import "./App.css";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const ItemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItems = (id) => {
    console.log("Delete Items has been clicked");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>To Do List</h1>
          <div className="form">
            <input
              type="text"
              id="message"
              name="message"
              onChange={ItemEvent}
              value={inputList}
              placeholder="Add the Work"
              required
            />
            <button onClick={listofItems}>+</button>
          </div>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
