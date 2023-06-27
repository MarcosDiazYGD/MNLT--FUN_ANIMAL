import axios from "axios";
import { useState } from "react";
import appStyles from '../css/app.module.css';
import createPetStyles from '../css/createPet.module.css'

const CreatePet = () => {
  const [name, setName] = useState('')
  const [race, setRace] = useState('')
  const [isVaccinated, setIsVaccinated] = useState(false)

  const newPet = {
    name, race, isVaccinated
  }

  const createNewPet = () => {
    axios.post('http://localhost:8000/api/v1/pets', newPet)
      .then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className={`${appStyles.FullScreen} ${appStyles.center}`} >
      <form
        className={`${createPetStyles.flex__column} ${createPetStyles.container__size} `}>
        <input
          className={createPetStyles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          id="name" />

        <input
          className={createPetStyles.input}
          type="text"
          placeholder="Race"
          value={race}
          onChange={e => setRace(e.target.value)}
          id="race" />

        <div className={createPetStyles.container__options_radio}>
          <div>
            <input
              type="radio"
              onChange={() => setIsVaccinated(true)}
              checked={isVaccinated === true}
              name='vaccine'
              id="vaccinated"
            />
            <label htmlFor="vaccinated">Vacunado</label>
          </div>

          <div>
            <input
              type="radio"
              onChange={() => setIsVaccinated(false)}
              checked={isVaccinated === false}
              name='vaccine'
              id="notVaccinated"
            />
            <label htmlFor="notVaccinated">No Vacunado</label>
            </div>
        </div>

        <button className={createPetStyles.button} onClick={createNewPet}>send</button>
      </form >


    </div>
  );
};

export default CreatePet;