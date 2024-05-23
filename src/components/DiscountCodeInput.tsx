import React, { useState } from "react";
import { setDiscountCode } from "../store/reducers/discountSlice";
import { validateDiscountCode } from "../utilities/validation";
import { useAppDispatch } from "../store/hooks";

interface DiscountCodeInputProps {
  className?: string;
}

const DiscountCodeInput: React.FC<DiscountCodeInputProps> = ({ className }) => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDiscountApplied(false);

    const code = e.target.value;
    setCode(code);
    const isValid = validateDiscountCode(code);
    if (isValid) {
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid discount code format.");
    }
  };

  const handleApplyDiscount = () => {
    dispatch(setDiscountCode(code));
    setIsDiscountApplied(true);
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <input
        type="text"
        placeholder="Enter Discount Code"
        value={code}
        onChange={handleInputChange}
        className="focus:ring-2 focus:ring-offset-2
         focus:ring-indigo-500 focus:outline-none px-3 py-2
          rounded-md border border-gray-300 w-full"
      />
      <p className="w-full max-w-sm text-red-500 text-sm overflow-wrap break-words">
        {errorMessage}
      </p>
      <button
        type="button"
        onClick={handleApplyDiscount}
        className={`disabled:opacity-50 
         ${
           isDiscountApplied
             ? "bg-green-500 hover:bg-green-700 text-white"
             : "bg-blue-500 hover:bg-blue-700 text-white"
         } 
         font-medium py-2 px-4 rounded-md flex items-center justify-center`}
        disabled={!code || !!errorMessage}
      >
        {isDiscountApplied ? (
          <>
            <span className="mr-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </span>
            Discount Applied
          </>
        ) : (
          "Apply Discount"
        )}
      </button>
    </div>
  );
};

export default DiscountCodeInput;
