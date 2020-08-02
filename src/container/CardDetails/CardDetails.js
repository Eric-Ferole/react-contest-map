import React from 'react';

// Components
import Slideshow from '../../components/Slideshow/Slideshow';
import CardContent from '../../components/CardContent/CardContent';
import ButtonCta from '../../components/UI/Button/ButtonCta/ButtonCta';

// Style 
import './CardDetails.scss';


const CardDetails = (props) => {

  return(
    <div className="CardDetails">
      <div className="CardDetails__header"></div>
      <Slideshow />
      <CardContent infos={props.candidatDetails} />
      {console.log('CardDetails: props.candidatDetails',  props.candidatDetails)}
      {console.log('CardDetails: props.titre', props.titre)}
      <ButtonCta text="Voter pour ce lieu" />
    </div>
  )
}

export default CardDetails;