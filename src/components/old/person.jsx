/* eslint-disable jsx-a11y/alt-text */
import Doggo from './dog.jpg';
import React from 'react';

const AppTwo = () => {

    const address = {
        forename: "Jordan",
        surname: "Benbelaid",
        role: "Trainer",
        city: "London",
        favTeam: "Arsenal"
    }

    const element = React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello there friends'
    );

    return(
        <div>
            <h1>{address.forename}</h1>
            <h1>{address.surname}</h1>
            <h1>{address.role}</h1>
            <h1>{address.city}</h1>
            <h1>{address.favTeam}</h1>

            <img src={Doggo}></img>

            {element}

            
        </div>

        
    );
   
}
export default AppTwo;