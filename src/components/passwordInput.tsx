// components/PasswordInput.tsx
import React, { useState } from "react";

interface PasswordInputProps {
  password: string;
  setPassword: (value: string) => void;
  setPasswordsMatch: (value: boolean) => void; // Add this prop
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  setPasswordsMatch,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative mt-2">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded border border-gray-300"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 h-full flex items-center pr-3"
      >
        <div className="h-full flex items-center">
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-blue-500 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 17s-3-3.06-4-4a3.5 3.5 0 114-4 3.5 3.5 0 014 4c-1 1.06-4 4-4 4z" />
              <path d="M3.27 3.27l17.46 17.46" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-blue-500 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M17 12a5 5 0 11-10 0" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default PasswordInput;
