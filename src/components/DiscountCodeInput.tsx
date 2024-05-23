import React, { useState } from "react";
import { setDiscountCode } from "../store/reducers/discountSlice";
import { validateDiscountCode } from "../utilities/validation";
import { useAppDispatch } from "../store/hooks";
import CheckedIcon from "./CheckedIcon";

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
              <CheckedIcon color="white" width={24} height={24} />
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
