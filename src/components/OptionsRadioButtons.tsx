import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

const OptionsRadioButtons: React.FC<{
  options: RadioOption[];
  onChange: (value: string) => void;
}> = ({ options, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          htmlFor={option.value}
          key={option.value}
          className="flex items-center 
          peer-focus:border peer-focus:border-indigo-500
          cursor-pointer focus:outline-solid-indigo-500"
        >
          <input
            type="radio"
            name="radio-group"
            id={option.value}
            value={option.value}
            onChange={(e) => onChange(e.target.value)}
            className="focus:ring-2
             focus:ring-offset-2 
             focus:ring-indigo-500
              focus:outline-none w-4 h-4 mr-2 rounded-full"
          />
          <span className="text-sm font-medium">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default OptionsRadioButtons;
