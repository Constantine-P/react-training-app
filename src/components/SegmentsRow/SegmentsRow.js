import React from 'react';
import SegmentsCell from '../SegmentsCell/SegmentsCell';
import './SegmentsRow.scss';

function SegmentsRow(props) {
  const {date, duration, origin, destination, stops} = props.row;

  const startDate = new Date(Date.parse(date));
  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + duration);

  const [startHours, startMinutes] = [format(startDate.getHours()), format(startDate.getMinutes())];
  const [endHours, endMinutes] = [format(endDate.getHours()), format(endDate.getMinutes())];

  const formattedDate = `${startHours}:${startMinutes} – ${endHours}:${endMinutes}`;
  const formattedDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  const formattedStops = stops.join(', ');
  const stopsNumber = stops.length;
  const path = `${origin} – ${destination}`;

  const cells = [
    {
      title: path,
      content: formattedDate,
    },
    {
      title: "в пути",
      content: formattedDuration,
    },
    {
      title: `${stopsNumber > 0 ? stopsNumber : 'без'} ${numToWord(stopsNumber, ['пересадка', 'пересадки', 'пересадок'])}`,
      content: formattedStops,
    },
  ];

  return (
    <div className="segments-row">
      {cells.map((cell, i) =>
        <SegmentsCell title={cell.title} content={cell.content} key={i}/>
        )}
    </div>
  )
}

function format(value) {
  return (value < 10) ? `0${value}` : `${value}`;
}

function numToWord(number, wordForms) {
  number = Math.abs(number) % 100;
  const num = number % 10;
  if (number > 10 && number < 20) return wordForms[2];
  if (num > 1 && num < 5) return wordForms[1];
  if (num === 1) return wordForms[0];
  return wordForms[2];
}

export default SegmentsRow;
