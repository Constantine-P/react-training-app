import React from 'react';
import SegmentsRow from '../SegmentsRow/SegmentsRow';
import './Segments.scss';

function Segments(props) {
  return (
    <div className="segments">
      {props.segments.map((row, i) =>
        <SegmentsRow row={row} key={i}/>
      )}
    </div>
  )
}

export default Segments;
