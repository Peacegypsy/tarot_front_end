import React from 'react';
import PropTypes, { func } from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
// ..
const apiUrl = 'http://localhost:5000/layout/paw';
function PawLayout() {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        axios.get(apiUrl)
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
                        (<li key="{card.card_id}">{card.name}</li>))}
                </ul>
                <div></div>
            </div>
        </div>
    )
}
export default PawLayout;