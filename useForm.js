import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    // use computed properties to make this flexible, and avoid defining one for each one
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  // here spread to return formState properties, useful when unknow or a lot
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
