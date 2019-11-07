import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/Home.css';


class Meditate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lengthOfBreath: 5,
      numberOfBreaths: 3,
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
      return <Redirect to='/complete' />;
    } else {
      return (
          <div className="App">
            <header className="App-header">
              <p>Breath In/Out:</p>
              <p>{this.state.lengthOfBreath}</p>
              <p>Breaths Left</p>
              <p>{this.state.numberOfBreaths}</p>
              <Link to="/">Cancel Meditation</Link>
            </header>
          </div>
      )
    }
  }
}

export default Meditate;
