import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';

function CardsLayout() {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
            .then(response => {
                console.log(response.data[0]["image-location"])
                setCardsData(response.data)
            })
            .catch((error) => {
                console.log('The value of error is:', error);
            })
    }, []);

    return (
        <div>Cards:
            <div className='cards-layout'>
                <div className="card-box">   {cardsData.map((card, index) => (
                    <div key={index} className="card">{card.card_name}
                        <div>{card.card_general} </div>
                        <img src={"https://cat-tarot-cards.herokuapp.com/" + card["image-location"]} alt="cat doing funny"/> </div>
                ))}
                </div>
            </div>
        </div>
    )
}
export default CardsLayout;