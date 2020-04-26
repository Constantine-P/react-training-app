import React from 'react';
import './StopsFilter.scss';
import CheckBox from '../CheckBox/CheckBox';

const items = [
  {text: 'все', name: 'all'},
  {text: 'без пересадок', name: '0'},
  {text: '1 пересадка', name: '1'},
  {text: '2 пересадки', name: '2'},
  {text: '3 пересадки', name: '3'},
];

class StopsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    this.props.onChange(name);
  }

  render() {
    return (
      <div className="stops-filter">
        <h4 className="stops-filter__title">Количество пересадок</h4>
        {items.map((item, i) =>
          <div className="stops-filter__item" key={item.text}>
            <CheckBox name={item.name}
                      text={item.text}
                      checked={this.props.stopsFilter[item.name]}
                      onChange={this.handleChange}
            />
          </div>
        )}
      </div>
    )
  }

}

export default StopsFilter;
