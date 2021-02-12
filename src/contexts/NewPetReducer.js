const ACTIONS = {
  ADD_TYPE: "add-type",
  ADD_BASIC: "add-basic",
  ADD_SUMMARY: "add-summary",
  ADD_DONE: "add-done"
}

const STEPS = {
  TYPE_STEP: "pet-type",
  BASIC_STEP: "pet-basic",
  SUMMARY_STEP: "pet-summary"
};

const PET_TYPES = {
  CAT: "cat",
  DOG: "dog",
  BIRD: "bird",
  OTHER: "other"
};

const PET_GENDERS = {
  MALE: "Male",
  FEMALE: "Female"
};

const PET_GENDERS_MAP = [PET_GENDERS.MALE, PET_GENDERS.FEMALE];

function addPetReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TYPE:
      return {
        ...state,
        petType: action.payload.type,
        step: action.payload.step
      }
    case ACTIONS.ADD_BASIC:
      return {
        ...state,
        petGender: action.payload.gender,
        name: action.payload.name,
        breed: action.payload.breed,
        step: action.payload.step
      }
    case ACTIONS.ADD_SUMMARY:
      return {
        ...state,
        step: action.payload.step
      }
    default:
      return state
  }
}

export { ACTIONS, STEPS, PET_TYPES, PET_GENDERS, PET_GENDERS_MAP };
export default addPetReducer;
