import React, { useState } from "react";

const Test: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);

  const handleButtonClick = (value: string) => {
    if (!result.includes(value)) {
      setResult([...result, value]);
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <button className="bg-red-200" onClick={() => handleButtonClick("OLT")}>
          OLT
        </button>

        <button
          className="bg-green-200"
          onClick={() => handleButtonClick("DN")}
        >
          DN
        </button>

        <button
          className="bg-yellow-200"
          onClick={() => handleButtonClick("SN")}
        >
          SN
        </button>
      </div>

      <div>{JSON.stringify(result)}</div>
    </div>
  );
};

export default Test;
