import React, { useState } from "react";
import { generateDiscountCode } from "../utilities/generateDiscountCode";

const DiscountCodeGenerator: React.FC = ({}) => {
  const [discountCode, setDiscountCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = () => {
    const code = generateDiscountCode();
    setDiscountCode(code);
    setIsCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
  };

  return (
    <div className={`flex flex-col items-center space-y-2`}>
      <span className="text-lg font-medium break-words">
        {discountCode ? discountCode : "Discount Code"}
      </span>
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={handleGenerate}
          className={`disabled:opacity-50 rounded-md py-2 px-4 text-center 
            bg-blue-500 hover:bg-blue-700 text-white`}
        >
          Generate Code
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!discountCode}
          className={`disabled:opacity-50 rounded-md py-2 px-4 text-center 
            ${
              isCopied
                ? "bg-green-500 hover:bg-green-700 text-white"
                : "disabled:opacity-50 rounded-md py-2 px-4 text-center bg-blue-500 hover:bg-blue-700 text-white"
            }`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default DiscountCodeGenerator;
