import React from 'react';
import PropTypes, { func } from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';




function PawLayout() {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/layout/paw`)
            .then(response => {
                console.log(response.data[0])
                setCardsData(response.data)
            })
            .catch((error) => {
                console.log('The value of error is:', error);
            })
    }, []);

    return (
        <div>Cards:
            <div className='paw-layout'>
                <ul>
                    {cardsData.map(card =>
                        (<li key={card.id}>{card.name} {card.general}</li>))}
                </ul>
                <div></div>
            </div>
        </div>
    )
}
export default PawLayout;