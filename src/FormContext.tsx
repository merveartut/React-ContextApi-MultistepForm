import React, { createContext, useReducer, useContext, ReactNode } from "react";
import type { FormAction, FormData } from "./types";

const initialFormState: FormData = {
  step: 1,
  personalInfo: { name: "", email: "" },
  address: { street: "", city: "", zipCode: "" },
  confirmation: false,
};

const formReducer = (state: FormData, action: FormAction): FormData => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: Math.min(state.step + 1, 4) };
    case "PREVIOUS_STEP":
      return { ...state, step: Math.max(state.step - 1, 1) };
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: { ...state.address, ...action.payload },
      };
    case "SUBMIT_FORM":
      // Şu anda herhangi bir api ye istek atmiyor
      return { ...state, confirmation: true, step: 4 };
    default:
      return state;
  }
};

interface FormContextType {
  state: FormData;
  dispatch: React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
