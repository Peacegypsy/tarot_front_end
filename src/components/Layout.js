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
                setCardsData(response.data)
            })
            .catch((error) => {
                console.log('The value of error is:', error);
            })
    }, []);

    return (
        <div>The Paw:
            <div className='paw-layout'>
                <ol className="wrapper">   {cardsData.map((card, index) => (
                    <li key={index} className={'box' + ' ' + 'a' + index}>{card.card_name} </li>
                ))}
                </ol>
            </div>
        </div>
    )
}
export default PawLayout;
