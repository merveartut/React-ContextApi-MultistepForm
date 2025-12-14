import React from "react";
import { useFormContext } from "./FormContext";

const AddressInfo: React.FC = () => {
  const { state, dispatch } = useFormContext();
  const { street, city, zipCode } = state.address;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleNext = () => {
    if (street && city && zipCode) {
      dispatch({ type: "NEXT_STEP" });
    } else {
      alert("Please fill in all address fields.");
    }
  };

  return (
    <div className="form-step">
      {" "}
      <h2>Step 2: Address Information</h2>
      <label>
        Street:
        <input name="street" value={street} onChange={handleChange} />
      </label>
      <label>
        City:
        <input name="city" value={city} onChange={handleChange} />
      </label>
      <label>
        Zip Code:
        <input name="zipCode" value={zipCode} onChange={handleChange} />
      </label>
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressInfo;
