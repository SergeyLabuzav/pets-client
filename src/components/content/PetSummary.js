import React from 'react';
import { ACTIONS, STEPS } from "../../contexts/NewPetReducer";
import "./PetSummary.css";

function PetSummary({ state, dispatch, calback }) {

  function handlePrev() {
    dispatch({ type: ACTIONS.ADD_SUMMARY, payload: { step: STEPS.BASIC_STEP } });
  }

  function handleDone() {
    calback(state);
  }

  return (
    <div className="petSummary"><h1>Summary info</h1>
      <p>
        <span className="petSummary__label">Type: </span>
        <span className="petSummary__description">{ state.petType }</span>
      </p>
      <p>
        <span className="petSummary__label">Name: </span>
        <span className="petSummary__description">{ state.name }</span>
      </p>
      <p>
        <span className="petSummary__label">Breed: </span>
        <span className="petSummary__description">{ state.breed }</span>
      </p>
      <p>
        <span className="petSummary__label">Gender: </span>
        <span className="petSummary__description">{ state.petGender }</span>
      </p>
      <div className="petBasic__action__container mt-50">
        <button className="primary__button custom-button" onClick={ handlePrev }>Prev</button>
        <button className="submit__button custom-button" onClick={ handleDone }>Done</button>
      </div>
    </div>
  );
}

export default PetSummary;
