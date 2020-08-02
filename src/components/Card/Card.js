import React, { Component } from 'react';

import image from '../../assets/images/image.png'

// Style 
import './Card.scss'

class Card extends Component {

  handleClick = () => {
    this.props.selectCard(this.props.index);
    console.log('HandleClick', this.props.index)
  };
  
  render() {
    return(
      <div className="Card" onClick={this.handleClick}>
        <img src={image} alt=""/>
        <h3>{this.props.title}</h3>
        <p className="City ville">{this.props.ville}</p>
      </div>
    )
  }  
}

export default Card;


