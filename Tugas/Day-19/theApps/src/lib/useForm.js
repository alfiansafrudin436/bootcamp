import {useState} from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState({
    ...initialValues,
  });
  const handleChangeValues = (key, value) => {
    setValues({...values, [key]: value});
  };
  return [values, handleChangeValues];
};
export default useForm;
