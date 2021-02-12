import React, { useReducer } from 'react';
import addPetReducer, { PET_GENDERS, PET_TYPES, STEPS } from "../../contexts/NewPetReducer";
import PetType from "./PetType";
import PetBasic from "./PetBasic";
import PetSummary from "./PetSummary";
import "./AddPet.css";
import paw from "../../assets/paw.svg";


function AddPet({ callback }) {
  const [state, dispatch] = useReducer(addPetReducer, {
    step: STEPS.TYPE_STEP,
    petType: PET_TYPES.CAT,
    petGender: PET_GENDERS.MALE
  });

  return (
    <div className="addPet">
      <div className="addPet__container">
        <img src={ paw } alt=""/>
        { state.step === STEPS.TYPE_STEP && (<PetType state={ state } dispatch={ dispatch }/>) }
        { state.step === STEPS.BASIC_STEP && (<PetBasic state={ state } dispatch={ dispatch }/>) }
        { state.step === STEPS.SUMMARY_STEP && (
          <PetSummary state={ state } dispatch={ dispatch } calback={ callback }/>) }
      </div>
    </div>
  );
}

export default AddPet;
