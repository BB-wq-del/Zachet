import React,{useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { PETS } from '../data/pets';

const PetDetail = () => {
    const {name:urlName} = useParams();
    const petName = decodeURIComponent(urlName);
    const pet = PETS.find(p => p.name === petName);

    const [hunger,setHunger] = useState(pet.hunger);

    if (!pet) {
        return (
            <div style={{padding: '20px'}}>
                <h2>Пета {petName} нета</h2>
                <Link to='/pets'>Вернутся</Link>
            </div>
        );
    };
    const PetHungerPlusPlus =() =>{
        setHunger(hunger+10);
        pet.hunger=hunger;
        if(pet.hunger>100)
            pet.hunger=100;
    }
    return (
        <div style={detailStyle}>
            <h1>{pet.name}</h1>
            <p><strong>Тип</strong>: {pet.type}</p>
            <p><strong>Сытость</strong>: {pet.hunger}</p>
            <p><strong>Возраст</strong>: {pet.age}</p>
            <p><strong>Любимая еда</strong>: {pet.food}</p>
            <button onClick={PetHungerPlusPlus} style={vtnSt}>Покорми</button>
            <hr />
            <Link to='/pets'>Вернутся</Link>
        </div>
    );
};
const vtnSt={
    backgroundColor:'#D893B9'
}
const detailStyle ={
    padding:'20px',
    maxWidth:'600px',
    margin:'0 auto',
    border:'1px solid #666',
    borderRadius:'10px',
    marginTop:'20px',
    backgroundColor: '#8A97C0'

};

export default PetDetail;