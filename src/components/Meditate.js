import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/Meditate.css';


class Meditate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lengthOfBreath: 5,
      numberOfBreaths: 5,
      endMeditation: false,
    };
  }

  componentDidMount() {
      setInterval(() => {
        if (this.state.lengthOfBreath > 1) {
          this.setState({ lengthOfBreath: this.state.lengthOfBreath - 1 });
        } else {
          this.setState({ numberOfBreaths: this.state.numberOfBreaths - 1 });
          this.setState({ lengthOfBreath: 5 });
          if (this.state.numberOfBreaths < 1) {
            this.setState({ endMeditation: true });
          }
        }
    }, 1000);
  }

  render() {
    if (this.state.endMeditation) {
      return <Redirect to='/' />;
    } else {
      return (
          <div id="Meditate">
            <p>Breath In/Out:</p>
            <p>{this.state.lengthOfBreath}</p>
            <p>Breaths Left</p>
            <p>{this.state.numberOfBreaths}</p>
            <Link to="/">Cancel Meditation</Link>
          </div>
      )
    }
  }
}

export default Meditate;
