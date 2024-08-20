import React, { useState } from "react"; // Importing React and the useState hook

function App() {
  // Initializing a state variable 'name' with an empty string
  // 'setName' is the function used to update the 'name' state
  const [name, setName] = useState("");

  // This function is triggered every time the user types in the input field
  function handleChange(event) {
    // Update the 'name' state with the current value of the input field
    setName(event.target.value);
  }

  return (
    <div className="container">
      {/* Displaying the value of 'name' dynamically inside the <h1> tag */}
      <h1>Hello {name}</h1>

      {/* Input field is a controlled component.
          - onChange: Calls handleChange function whenever the input value changes
          - type: Specifies the input type as text
          - placeholder: Provides a placeholder text in the input field */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />

      {/* Submit button (no functionality added for this example) */}
      <button>Submit</button>
    </div>
  );
}

export default App; // Exporting the App component as the default export
