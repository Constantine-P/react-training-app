import React from 'react';
import './CheckBox.scss';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.name);
  }

  render() {
    return (
      <label className="check-box">
        <input className="check-box__input"
               type="checkbox"
               name={this.props.name}
               checked={this.props.checked}
               onChange={this.handleChange}
        />
        <div className="check-box__view"/>
        <span className="check-box__text">{this.props.text}</span>
      </label>
    )
  }
}

export default CheckBox;
