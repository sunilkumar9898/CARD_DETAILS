import React from 'react';
import {data} from './data';
console.log(data);

const Cart = () => {
  return (
      <div className="cart">
          {data.map((ele, index) => {
              return (
                  <div key={index}>
                      <h3>{ele.name}</h3>
                      <h4>{ele.lastname}</h4>
                      <h5>{ele.age}</h5>
                      <h6>{ele.contact}</h6>
                  </div>
              );
          })}
      </div>
  );
}

export default Cart
