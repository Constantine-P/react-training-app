import React from 'react';
import Tickets from '../Tickets/Tickets';
import SortFilter from '../SortFilter/SortFilter';
import StopsFilter from '../StopsFilter/StopsFilter';
import './Page.scss'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortIndex: 1,
      stopsFilter: {
        all: false,
        0: true,
        1: false,
        2: false,
        3: false,
      }
    };
    this.handleSortIndexChange = this.handleSortIndexChange.bind(this);
    this.handleStopsFilterChange = this.handleStopsFilterChange.bind(this);
  }

  handleSortIndexChange(index) {
    this.setState({sortIndex: index});
  }

  handleStopsFilterChange(name) {
    this.setState({
      stopsFilter: {
        ...this.state.stopsFilter,
        [name]: !this.state.stopsFilter[name],
      }
    });
  }

  render() {
    return (
      <main className="page">
        <div className="page__logo">
          <img src="main-logo.svg" alt="main-logo"/>
        </div>
        <div className="page__tickets">
          <Tickets filter={this.state.stopsFilter} sort={this.state.sortIndex}/>
        </div>
        <div className="page__sort-filter">
          <SortFilter sortIndex={this.state.sortIndex} onChange={this.handleSortIndexChange}/>
        </div>
        <div className="page__stops-filter">
          <StopsFilter stopsFilter={this.state.stopsFilter} onChange={this.handleStopsFilterChange}/>
        </div>
      </main>
    )
  }
}

export default Page;
