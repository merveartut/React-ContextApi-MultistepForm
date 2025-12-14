# 🚀 Multi-Step Application Form

This project is an implementation of an interactive, multi-step form using advanced **state management** techniques and **TypeScript** in a modern React application.

It aims to improve the user experience by breaking down a large data collection task (Personal Info, Address, and Review) into small, manageable steps, showcasing best practices in component and state architecture.

---

## ✨ Key Technologies and Concepts

This project effectively highlights the following essential modern React topics for your portfolio:

| Topic | Description |
| :--- | :--- |
| **React Hooks** | Efficient use of `useState`, `useReducer`, and custom hooks (`useFormContext`). |
| **State Management** | Centralized state control for all complex form data using the **`useReducer`** hook. |
| **Context API** | Utilization of **`useContext`** to share state and dispatch functions across nested components, effectively solving **prop drilling**.  |
| **TypeScript (TS)** | Strict type safety for the application's entire data structure (`FormData`) and action types (`FormAction`). |
| **Conditional Rendering** | Dynamically rendering the correct component (`Step1PersonalInfo`, `Step2AddressInfo`, etc.) based on the current `state.step` value. |
| **Modern Styling** | Clean and professional user interface achieved through component-specific CSS styling. |

---

## ⚙️ Setup and Running the Project

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

* Node.js (LTS recommended)
* npm or yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/merveartut/multi-step-form.git](https://github.com/merveartut/multi-step-form.git)
    cd multi-step-form
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically start running at `http://localhost:5173/`.

---
## 🧠 Detailed Working Mechanism

The project employs a clean architecture for form data management:

1.  **`src/types.ts`:** Defines the types for the entire application state and all possible mutation actions, ensuring type safety throughout.
2.  **`src/FormContext.tsx`:**
    * **Reducer:** The `formReducer` function catches actions (like `NEXT_STEP` or `UPDATE_ADDRESS`) and updates the state in a predictable way.
    * **Context:** The `FormProvider` wraps the application, holding the Reducer logic and providing the **`state`** and the **`dispatch`** function to all descendant components.
    * **Hook:** The `useFormContext` hook provides simple access to this state and dispatch function from any step component.
3.  **Step Components:** Each step component (`Step1PersonalInfo`, etc.) reads the current data using `useFormContext` and sends the user's input back to the Reducer via `dispatch`, updating the central state.

This architecture simplifies data access for components while keeping the complex state logic confined to a single, testable file (`FormContext.tsx`).

---
