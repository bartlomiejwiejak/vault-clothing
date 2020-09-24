import { useState } from 'react';

const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState)

  function handleTouch(name) {
    let newState = { ...formState };
    newState = {
      ...newState,
      inputs: {
        ...newState.inputs,
        [name]: {
          ...newState.inputs[name],
          isTouched: true
        }
      }
    }
    setFormState(newState);
  }

  function handleChange(name, value) {
    let newState = { ...formState };
    newState = {
      ...newState,
      inputs: {
        ...newState.inputs,
        [name]: {
          ...newState.inputs[name],
          value,
          isValid: newState.inputs[name].validator(value)
        }
      }
    }

    let isFormValid = true;
    for (let inputName in newState.inputs) {
      if (!newState.inputs[inputName].isValid) {
        isFormValid = false;
        break;
      }
    }
    newState = {
      ...newState,
      isFormValid
    }

    setFormState(newState);
  }

  return { formState, handleChange, handleTouch };
}

export default useForm;