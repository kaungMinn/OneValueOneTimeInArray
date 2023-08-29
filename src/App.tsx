import React, { useState } from "react";

const App: React.FC = () => {
  // Initialize the result state as an empty array
  const [result, setResult] = useState<string[]>([]);

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    // Check if the value is not already in the result array
    if (!result.includes(value)) {
      // Add the value to the result array
      setResult([...result, value]);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick("OLT")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        OLT
      </button>
      <button
        onClick={() => handleButtonClick("DN")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        DN
      </button>
      <button
        onClick={() => handleButtonClick("SN")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        SN
      </button>

      <div>
        <h2>Result Array:</h2>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
