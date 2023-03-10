import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import mockdata from "../../utils/mockapi.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockdata);
      }, 500);
    }).then((data) => {
      if (typeof id !== "undefined")
        data = data.filter((item) => item.categoryId === parseInt(id));

      setProducts(data);
    });
  }, [id]);

  return products.map((product) => {
    return <Product key={product.id} product={product}></Product>;
  });
};

export default ItemListContainer;
