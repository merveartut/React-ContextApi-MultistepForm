import React from "react";
import { useFormContext } from "./FormContext";

const Review: React.FC = () => {
  const { state, dispatch } = useFormContext();

  const handleSubmit = () => {
    setTimeout(() => {
      dispatch({ type: "SUBMIT_FORM" });
    }, 1000);
  };

  return (
    <div className="form-step">
      {" "}
      <h2>Step 3: Review and Submit</h2>
      <div className="flex flex-col gap-2">
        {" "}
        <div className="border-2 p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Personal Info</h3>
          <div className="flex flex-col gap-2">
            <p className="flex flex-row gap-2">
              Name: <strong>{state.personalInfo.name}</strong>
            </p>
            <p>
              Email: <strong>{state.personalInfo.email}</strong>
            </p>
          </div>
        </div>
        <div className="border-2 p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Address Info</h3>
          <div className="flex flex-col gap-2">
            <p className="flex flex-row gap-2">
              Street: <strong>{state.address.street}</strong>
            </p>
            <p>
              City: <strong>{state.address.city}</strong>
            </p>
            <p>
              Zip: <strong>{state.address.zipCode}</strong>
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={handleSubmit}>Confirm & Submit</button>{" "}
    </div>
  );
};

export default Review;
