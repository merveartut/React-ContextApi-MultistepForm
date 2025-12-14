import React from "react";
import { useFormContext } from "./FormContext";

const PersonalInfo: React.FC = () => {
  const { state, dispatch } = useFormContext();
  const { name, email } = state.personalInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleNext = () => {
    if (name && email) {
      dispatch({ type: "NEXT_STEP" });
    } else {
      alert("Please fill in both Name and Email.");
    }
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={email} onChange={handleChange} />
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
