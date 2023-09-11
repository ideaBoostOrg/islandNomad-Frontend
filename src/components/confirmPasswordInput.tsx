// components/ConfirmPasswordInput.tsx
import React, { useState, useEffect } from "react";

interface ConfirmPasswordInputProps {
  password: string; // Add this prop
  confirmPassword: string;
  setPassword: (value: string) => void;
  passwordsMatch: boolean;
  setPasswordsMatch: (value: boolean) => void;
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  password, // Receive the password prop
  confirmPassword,
  setPassword,
  passwordsMatch,
  setPasswordsMatch,
}) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setPassword(value);
    setPasswordsMatch(value === password); // Use the password prop here
  };

  useEffect(() => {
    // If passwords match, set the parent component's passwordsMatch state to true
    setPasswordsMatch(confirmPassword === password);
  }, [confirmPassword, password, setPasswordsMatch]);

  return (
    <div className="relative mt-2">
      <input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChange(e.target.value)}
        className={`w-full p-3 rounded border ${
          passwordsMatch ? "border-gray-300" : "border-red-500"
        }`}
      />
      {!passwordsMatch && confirmPassword && (
        <p className="text-red-500 text-xs mt-2">Passwords do not match.</p>
      )}
    </div>
  );
};

export default ConfirmPasswordInput;
