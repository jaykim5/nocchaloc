import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <div className="product-info">
        <img alt="product_img" clasName="img-origin" src={this.props.img} />
        <img
          alt="mainslide_img"
          className="img-hover"
          src="/images/Main/leaf.jpg"
        />
        <h2>{this.props.title}</h2>
        <h2>{this.props.price}</h2>
      </div>
    );
  }
}

export default Product;
