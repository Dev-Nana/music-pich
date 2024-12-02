import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="border border-purple-150 rounded-lg px-5 py-2 text-purple-150 w-fit font-medium text-xs"
    >
      View More
    </button>
  );
};
