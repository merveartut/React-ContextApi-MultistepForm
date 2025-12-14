export interface FormData {
  step: number;
  personalInfo: {
    name: string;
    email: string;
  };
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  confirmation: boolean;
}

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_PERSONAL_INFO"; payload: Partial<FormData["personalInfo"]> }
  | { type: "UPDATE_ADDRESS"; payload: Partial<FormData["address"]> }
  | { type: "SUBMIT_FORM" };
