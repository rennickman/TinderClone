import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';
import axios from '../axios';




// Tinder cards imported and functionality copied from website
const TinderCards = () => {

    const [people, setPeople] = useState([]);


    // Use effect to Fetch People from database and store into state
    useEffect(() => {
        async function fetchData() {
            // Make api call with axios to get all cards saved in database
            const req = await axios.get('/tinder/cards');
            // Store data in state
            setPeople(req.data);
        }
        fetchData();
    }, []);

    console.log(people);

    // Tinder card required functions for swiping
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = name => {
        console.log(name + " left the screen!");
    }




    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">

                {/* Tinder Cards */}
                {people.map(person => (
                    
                    <TinderCard 
                        className="swipe" key={person.name} preventSwipe={["up", "down"]} 
                        onSwipe={dir => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            {/* Name */}
                            <h3>{person.name}</h3>  
                        </div>
                    </TinderCard>
                ))}
            </div>

            
        </div>
    );
};


export default TinderCards;
