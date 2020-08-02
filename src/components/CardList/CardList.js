import React, { Component } from 'react';

// Components
import Card from '../Card/Card';

// Style 
import './CardList.scss';

class CardList extends Component {
  render() {
    return(
      <div className="CardList">
        {this.props.candidatures.map((candidat, index) => {
          // console.log('candidat', candidat)
          return(
            <Card 
            title={candidat.titre}
            ville={candidat.ville}
            // image={candidat.image}
            key={candidat.id}
            index={index}
            // selected={candidat.titre === this.props.selectedCard.titre}
            selectCard={this.props.selectCard}
          />
          )
        })}
      </div>          
    )
  } 
}

export default CardList;