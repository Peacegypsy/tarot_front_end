import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => {

    return (
        <div className='card'>
            <div>
                {   card.card_name,
                    card.card_general,
                    card.card_upright,
                    card.card_reversed,
                    card.card_image_location}
            </div>
        </div>
    )
}
export default Card;