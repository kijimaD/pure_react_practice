import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
    let totalPrice = 0;

    return (
        <div>
        <ul className="CartPage-items">
        {items.map(item =>
                   <li key={item.id} className="CartPage-item">
                   <Item item={item}>
                   <div className="CartItem-controls">
                   <button
                   className="CartItem-removeOne"
                   onClick={() => onRemoveOne(item)}>&ndash;</button>
                   <span className="CartItem-count">{item.count}</span>
                   <button
                   className="CartItem-addOne"
                   onClick={() => onAddOne(item)}>+</button>
                   </div>
                   </Item>
                   </li>
                  )}
        </ul>
	{items.map(item => {
	    totalPrice += item.price * item.count
	})}
        Total: ${totalPrice}
        </div>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default CartPage;
