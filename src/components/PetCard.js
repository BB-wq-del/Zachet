import React from 'react';
import {Link} from 'react-router-dom';

const PetCard = ({pet}) => {
    const detailLink = `/pet/${encodeURIComponent(pet.name)}`;
    return (
        <div style={cardStyle}>
            <h3>{pet.name}</h3>
            <p>Тип: <strong>{pet.type}</strong></p>
            <p>Уровень сытости: <strong>{pet.hunger}</strong></p>
            <Link to={detailLink} style={linkStyle}>
                посмотреть детали
            </Link>
        </div>
    );
};

const cardStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    borderRadius: '10x',
    width: '200px',
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor: '#9999CC'
};

const linkStyle = {
    display: 'block',
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#99CCCC',
    color: '330033',
    textDecoration: 'none',
    borderRadius: '5px',
};

export default PetCard;