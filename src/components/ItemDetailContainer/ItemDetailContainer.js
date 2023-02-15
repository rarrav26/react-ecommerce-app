import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import mockdata from "../../utils/mockapi.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockdata);
      }, 500);
    }).then((data) => {
      data = data.filter((item) => item.id === parseInt(id));
      setProduct(data[0]);
    });
  }, [id]);

  return <Product key={product.id} product={product}></Product>;
};

export default ItemDetailContainer;
