import React from 'react';
import PropTypes, { func } from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';
// import Card from './Card'





function PawLayout() {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/layout/paw`)
            .then(response => {
                setCardsData(response.data)
            })
            .catch((error) => {
                console.log('The value of error is:', error);
            })
    }, []);

    return (
            <div style={{ margin: "auto", width: "50%" }} className="PawCards">
                {cardsData.map((cards, index) => (
                    <div> layoutCard={cards} key={`card-${index}`} </div>
                ))}
            </div>
    )
}
export default PawLayout;