import React from "react";
import { useEffect, useState } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log("Компонент ListItems был смонтирован");
  }, []);
  function AddItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
