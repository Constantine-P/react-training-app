import React from 'react';
import Ticket from '../Ticket/Ticket';
import './Tickets.scss'

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tickets: []};

    (async () => {
      const tickets = await Tickets.fetchTickets();
      this.setState({tickets});
    })();

  }

  sortFunc() {
    if (this.props.sort === 0) {
      return (a, b) => a.price - b.price;
    } else if (this.props.sort === 1) {
      return (a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
    }
    return 0;
  }

  static async fetchTickets() {
    const {searchId} = await fetch('https://front-test.beta.aviasales.ru/search').then(data => data.json());
    const {tickets} = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`).then(data => data.json());
    tickets.length = 100;
    return tickets;
  }

  render() {
    return (
      <div className="tickets">
        {
          this.state.tickets.filter(item => {
            const stopsNumberForward = item.segments[0].stops.length;
            const stopsNumberBackward = item.segments[1].stops.length;

            const condition = this.props.filter.all
              || (this.props.filter[stopsNumberForward] && (stopsNumberBackward <= stopsNumberForward))
              || (this.props.filter[stopsNumberBackward] && (stopsNumberForward <= stopsNumberBackward));
            return !!condition;
          }).sort(this.sortFunc())
            .map((ticket, i) =>
              <div className="tickets__ticket" key={i}>
                <Ticket ticket={ticket}/>
              </div>
            )
        }
      </div>
    );
  }
}

export default Tickets;
