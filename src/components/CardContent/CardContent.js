import React from 'react';

// props infos: {}

const CardContent = (props) => {
  return(
    <div className="CardContent">
      <h2 className="CardContent__title">{props.titre}</h2> 
      <p className="CardContent__address">{props.address}</p>
      {console.log('CardContent: props', props)}
      {console.log('CardContent: props.titre', props.titre)}
      <p className="CardContent__description">{props.description}</p>
    </div>
  )
}

export default CardContent;