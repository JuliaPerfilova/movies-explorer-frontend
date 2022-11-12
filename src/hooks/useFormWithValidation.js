import {useCallback, useState} from "react";
import { INPUT_ERRORS, MAIL_REGEXP } from "../utils/constants";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  
  const validateEmail = (email) => {
    return MAIL_REGEXP.test(email);
  }

  const handleInputChange = (event) => {

    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    if((!target.validationMessage || target.validationMessage === '') && (name === "email")) {
      if (validateEmail(value)) {
        setErrors({...errors, [name]: target.validationMessage });
      } else {
        setErrors({...errors, [name]: INPUT_ERRORS.WRONG_EMAIL});
      }
    } else {
      setErrors({...errors, [name]: target.validationMessage });
    }
    setIsValid(target.closest("form").checkValidity());
  };


  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleInputChange, errors, isValid, resetForm, setValues, setIsValid };
}
