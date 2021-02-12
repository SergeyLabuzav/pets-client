import React, { useState } from "react";
import "./PetType.css";
import cat from "../../assets/cat.svg";
import dog from "../../assets/dog.svg";
import bird from "../../assets/bird.svg";
import hamster from "../../assets/hamster.svg";
import { ACTIONS, STEPS } from "../../contexts/NewPetReducer";


function PetType({ state, dispatch }) {

  const [petType, setPetType] = useState(state.petType);
  const pets = [
    {
      type: "cat",
      image: cat
    },
    {
      type: "dog",
      image: dog
    },
    {
      type: "bird",
      image: bird
    },
    {
      type: "other",
      image: hamster
    }
  ];

  function onChangeValue(e) {
    setPetType(e.currentTarget.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TYPE, payload: { type: petType, step: STEPS.BASIC_STEP } })
  }

  return (
    <div>
      <h1>What type of pet do you have?</h1>
      <div className="addPet__radio__button__group">
        {
          pets.map(pet => (
            <div key={ pet.type } className="addPer__radio__button">
              <input id={ pet.type }
                     type="radio"
                     name="radio"
                     value={ pet.type }
                     onChange={ onChangeValue }
                     checked={ pet.type === petType }/>
              <label htmlFor={ pet.type }>
                <div className="addPet__radio__input__img">
                  <img src={ pet.image } alt=""/>
                  <p>{ pet.type }</p>
                </div>
              </label>
            </div>
          ))
        }
      </div>
      <p className="mt-20 mb-20">Have multiple pets? That's awesome. You can create additional profiles for the whole
        family later.</p>
      <button className="primary__button custom-button" onClick={ handleClick }>Next
      </button>
    </div>
  );
}

export default PetType;
