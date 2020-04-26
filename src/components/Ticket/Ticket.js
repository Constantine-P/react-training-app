import React from 'react';
import './Ticket.scss';
import Logo from '../Сompany-logo/Logo';
import Segments from '../Segments/Segments';

function Ticket({ticket}) {
  const {price, carrier, segments} = ticket;

  return (
    <article className="ticket">
      <h1 className="ticket__price">
        {price.toLocaleString()} Р
      </h1>
      <Logo carrier={carrier}/>
      <Segments segments={segments}/>
    </article>
  );
}

export default Ticket;
