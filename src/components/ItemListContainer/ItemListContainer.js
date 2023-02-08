import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";

const ItemListContainer = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Solo se ejecuta cuando carga el componente");
  }, []);

  useEffect(() => {
    console.log("Solo se ejecuta cuando cambia counter");
  }, [counter]);

  return (
    <p
      style={{ userSelect: "none" }}
      className="greeting"
      onClick={() => setCounter(counter + 1)}
    >
      {props.greeting + " " + counter}
    </p>
  );
};

export default ItemListContainer;
