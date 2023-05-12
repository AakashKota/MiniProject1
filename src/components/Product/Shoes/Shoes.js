import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase/FirebaseConfig';
import { Card, Image, Rating, Button } from "semantic-ui-react";
import "./../Product.css";
import { useStateValue } from '../../../StateProvider/StateProvider';

const Shoes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("Products")
        .where("category", "==", "Shoes")
        .get();
      setProducts(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        rating: product.rating,
        imageUrl: product.imageUrl,
      },
    });
  };

  return (
    <>
    <div className="products-container">
    {products.map((product) => (
      <div className="card">
      <img className="card-img-top"  src={product.imageUrl} alt={product.title}/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text"><h6>Price:&nbsp;&nbsp;  Rs{product.price} &nbsp;  <Rating icon="star" defaultRating={product.rating} maxRating={5} /></h6></p>
        <p className="card-text2"><Button className="product__button" onClick={() => addToBasket(product)}>
             Add to Basket
           </Button></p><br/>        
      </div>
    </div>
    ))}
    </div>
    
    </>
    
  );
};

export default Shoes