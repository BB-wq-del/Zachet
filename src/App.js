import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PETS } from './data/pets';
import  PetCard  from './components/PetCard';
import  PetDetail  from './components/PetDetail';

const PetList = ({pets, activeFilter,setActiveFilter, filteredPets}) => {
    const petTypes = ['Все',...new Set(pets.map(p=>p.type))];
    return (
        <div style={{ padding: '20px' }}>
            <h1>Питомецы</h1>

            <div style={filterContainerStyle}>
                <select id='pet-filter'
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        style={selectStyle}
                >
                {petTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
                </select>
            </div>
            <hr />
            <div>
                {filteredPets.map(pet=>(
                    <PetCard key={pet.name} pet={pet} />
                ))}
            </div>
        </div>
    );

}


function App() {
    const [pets, setPets] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Все');
    const [filteredPets,setFilteredPets] = useState([]);

    useEffect(()=>{
    setPets(PETS);
    setFilteredPets(PETS);
    },[]);

    useEffect(()=>{
        if (activeFilter==='Все'){
            setFilteredPets(pets);
        }
        else
        {
            const newFiltered = pets.filter(p=>p.type===activeFilter);
            setFilteredPets(newFiltered);
        }
    },[activeFilter,pets]);

  return (
  <>
    <Router>
        <Routes>
            <Route path='/pets' element={
                <PetList
                    pets={pets}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    filteredPets={filteredPets} />
                }/>
                <Route path='/pet/:name' element={<PetDetail />} />
                <Route path='/' element={
                    <div style={{padding: '20px'}}>
                        <p>петы приветствуют</p>
                        <Link to='/pets'>начать просмотр</Link>
                    </div>
                }/>
        </Routes>
    </Router>

</>
  );
}

const filterContainerStyle = {};
const selectStyle ={};

export default App;
