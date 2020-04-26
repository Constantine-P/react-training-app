import React from 'react';
import './SegmentsCell.scss';

function SegmentsCell(props) {
  return (
    <div className="segments-cell">
      <h5 className="segments-cell__title">{props.title}</h5>
      <div className="segments-cell__content">{props.content}</div>
    </div>
  )
}

export default SegmentsCell;

