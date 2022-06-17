import React from 'react';
import CardTitle from '../cardTitle/cardTitle.js';
import CardImage from '../cardImage/cardImage.js';
import CardInfo from '../cardInfo/cardInfo.js';
import './card.css';

const Card = ({ title, image, info, onClick }) => {
    return (
        <div className='card' onClick={() => { onClick() }} >
            <div className="card-body">
                <CardTitle title={title} />
                <CardImage url={image} />
                <CardInfo info={info} />
            </div>
        </div>
    );
}

export default Card;