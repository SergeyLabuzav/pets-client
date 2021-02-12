import React, { useRef, useState } from 'react';
import "./PetBasic.css";
import { ACTIONS, STEPS, PET_GENDERS_MAP } from "../../contexts/NewPetReducer";

function PetBasic({ state, dispatch }) {
  const petNameRef = useRef()
  const petBreedRef = useRef()
  const [petGender, setPetGender] = useState(state.petGender);

  function handlePrev() {
    dispatch({
      type: ACTIONS.ADD_BASIC,
      payload: payload(STEPS.TYPE_STEP)
    })
  }

  function handleNext() {
    dispatch({
      type: ACTIONS.ADD_BASIC,
      payload: payload(STEPS.SUMMARY_STEP)
    })
  }

  function payload(step) {
    return {
      gender: petGender,
      name: petNameRef.current.value,
      breed: petBreedRef.current.value,
      step: step
    }
  }

  function onChangeValue(e) {
    setPetGender(e.currentTarget.value);
  }

  return (
    <div><h1>Basic info</h1>
      <div className="mb-2">
        <input className="custom__input"
               type="text"
               ref={ petNameRef }
               defaultValue={state.name}
               placeholder="Pet's name"
               required/>
      </div>
      <div className="mb-2">
        <input className="custom__input"
               type="text"
               ref={ petBreedRef }
               defaultValue={state.breed}
               placeholder="Pet's breed"
               required/>
      </div>
      <div className="custom__radioButton__group">
        {
          PET_GENDERS_MAP.map(gender => (
            <div key={ gender } className="custom__radioButton">
              <input id={ gender }
                     type="radio"
                     name="radio"
                     value={ gender }
                     onChange={ onChangeValue }
                     checked={ gender === petGender }/>
              <label htmlFor={ gender }>
                <div className="custom__radioButton__input__img">
                  <p>{ gender }</p>
                </div>
              </label>
            </div>
          ))
        }
      </div>
      <div className="petBasic__action__container mt-50">
        <button className="primary__button custom-button" onClick={ handlePrev }>Prev</button>
        <button className="primary__button custom-button" onClick={ handleNext }>Next</button>
      </div>
    </div>
  );
}

export default PetBasic;
