import React from "react";
import { Segment, Item, Label } from "semantic-ui-react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../Reducer/Reducer";

import './SubTotal.css'

function SubTotal() {
    const[{basket},] = useStateValue();
  return (
    <div className="Total">
      <div className="Total2">
        <div className="Total3">
          <Segment raised>
            <Label color="orange" ribbon>
              Total Price
            </Label>
            <span className="subtotal__price">Rs:{getBasketTotal(basket)}</span>
          </Segment>
        </div>
      </div>
    </div>
  );
}

export default SubTotal;
