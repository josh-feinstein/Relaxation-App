import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/Home.css';


class Meditate extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;

    this.state = {
      lengthOfBreath: 5,
      numberOfBreaths: 6,
      breathIn: true,
      endMeditation: false,
    };
  }

  componentDidMount() {
      this.interval = setInterval(() => {
        if (this.state.lengthOfBreath > 1) {
          this.setState({ lengthOfBreath: this.state.lengthOfBreath - 1 });
        } else {
          this.setState({ numberOfBreaths: this.state.numberOfBreaths - 1 });
          this.setState({ breathIn: !this.state.breathIn })
          this.setState({ lengthOfBreath: 5 });
          if (this.state.numberOfBreaths < 1) {
            this.setState({ endMeditation: true });
          }
        }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.endMeditation) {
      return <Redirect to='/complete' />;
    } else {
      return (
          <div className="App">
            <header className="App-header">
              <h1>{(this.state.breathIn) ? 'Inhale' : 'Exhale'}</h1>
              <h3>{this.state.lengthOfBreath} seconds...</h3>
              <p>{this.state.numberOfBreaths} {(this.state.numberOfBreaths === 1) ? 'Last Breath' : 'Breaths Left' }</p>
              <Link className="link" to="/">Stop Meditating</Link>
            </header>
          </div>
      )
    }
  }
}

export default Meditate;
