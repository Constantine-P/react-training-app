import React from 'react';

function Logo(props) {
  return (
    <img className="ticket-logo"
         src={`https://pics.avs.io/99/36/${props.carrier}.png`}
         alt={props.carrier + '-logo'}
    />
  )
}

export default Logo;

