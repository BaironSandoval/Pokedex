import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom';

import './FilterForm.css'
import { getAllTypes } from '../../../services/getAllTypes';

const FilterForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial)
  

  const handleChange = (e) =>{
    const newValue = e.target.value;
    setNameValue(newValue)
  };
  const handleTypeChange = (e) =>{
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue)
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typesList = await getAllTypes();
      setTypes(typesList);
    };

    loadTypes()
  }, [])
  
  useEffect(() => {
    setNameValue(nameInitial)
    setTypeValue(typeInitial)
  }, [nameInitial, typeInitial]);


  return (
    <Form className='form'>
      <h2>Search filters</h2>

      <div className='form__inputs-container'>
         <input 
            value={nameValue}
            onChange={handleChange}
            type="text" 
            placeholder="Write the name of your pokemon" 
            name="pokemonName" 
            className='form__input-name'
          /> 

          <select 
          name="pokemonType" 
          value={typeValue}
          onChange={handleTypeChange} 
          className='form__input-type'
          >
            <option value="">All</option>
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
      </div>
      <button className='form__btn'>Search</button>  
    </Form>
  )
}

export default FilterForm