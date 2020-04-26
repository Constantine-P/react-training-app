import React from 'react';
import './SortFilter.scss';

const items = ['самый дешёвый', 'самый быстрый'];

class SortFilter extends React.Component{
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(event) {
    this.props.onChange(Number(event.target.id));
  }

  render() {
    return (
      <div className="sort-filter">
        {items.map((item, i) =>
          <label className="sort-filter__item" key={i}>
            <input className="sort-filter__radio"
                   type="radio" name="sort-filter"
                   checked={i === this.props.sortIndex}
                   onChange={this.handleItemChange} id={i}
            />
            <div className="sort-filter__item-view">{item}</div>
          </label>
        )}
      </div>
    )
  }
}

export default SortFilter;
