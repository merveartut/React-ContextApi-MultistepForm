import React from "react";
import { FormProvider, useFormContext } from "./FormContext";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import Review from "./Review";
import "./App.css";

const StepRenderer: React.FC = () => {
  const { state } = useFormContext();

  if (state.confirmation) {
    return (
      <div className="success-screen">
        <h1>✅ Submission Successful!</h1>
        <p>Thank you for completing the multi-step form.</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  }

  switch (state.step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <AddressInfo />;
    case 3:
      return <Review />;
    default:
      return <div>Error Unknown Step</div>;
  }
};

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Multi-Step Application Form</h1>

      <FormProvider>
        <StepRenderer />
      </FormProvider>
    </div>
  );
};

export default App;
