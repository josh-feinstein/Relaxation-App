import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/Home.css';


function Meditate() {
    const [lengthOfBreath, setLengthOfBreath] = useState(5);
    const [numberOfBreaths, setNumberOfBreaths] = useState(3);
    const [endMeditation, setEndMeditation] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
          if (lengthOfBreath > 1) {
              setLengthOfBreath(lengthOfBreath - 1 );
          } else {
              if (numberOfBreaths - 1 < 1) {
                  setEndMeditation(true);
              }
              setNumberOfBreaths(numberOfBreaths - 1);
              setLengthOfBreath(5);
          }
      }, 500);
      return () => clearTimeout(timer);
  }, [lengthOfBreath, numberOfBreaths]);

    if (endMeditation) {
        return <Redirect to='/complete' />;
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Breath In/Out:</p>
                    <p>{lengthOfBreath}</p>
                    <p>Breaths Left</p>
                    <p>{numberOfBreaths}</p>
                    <Link to="/">Cancel Meditation</Link>
                </header>
            </div>
        )
    }
}

export default Meditate;
