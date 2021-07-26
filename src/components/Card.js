import React from 'react';

const Card = ({ card, flipCard }) => {
    const onFlipCard = () => {
        flipCard(card.card_id)
    }
    return (
        <div className='card'>
            <div>
                {card.card_name,
                    card.card_general,
                    card.card_upright,
                    card.card_reversed,
                    card.card_image_location}
                <span onClick={onFlipCard}>Flip Card</span>
            </div>
        </div>
    )
}
