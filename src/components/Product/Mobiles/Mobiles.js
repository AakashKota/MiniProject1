import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase/FirebaseConfig';
import { Card, Image, Rating, Button } from "semantic-ui-react";
import "./../Product.css";
import { useStateValue } from '../../../StateProvider/StateProvider';
const Mobiles = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("Products")
        .where("category", "==", "Mobiles")
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
    <div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <Card className="product__card">
            <Image className="product__image" centered src={product.imageUrl} />
            <Card.Content>
              <Card.Header className="product__title">{product.title}</Card.Header>
              <Card.Meta>
                <Rating icon="star" defaultRating={product.rating} maxRating={5} />
              </Card.Meta>
              <Card.Description>
                <span className="product__price">Price: {product.price}</span>
              </Card.Description>
            </Card.Content>
            <Card.Content extra className="product__footer">
              <Button inverted className="product__button" onClick={() => addToBasket(product)}>
                Add to Basket
              </Button>
            </Card.Content>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Mobiles