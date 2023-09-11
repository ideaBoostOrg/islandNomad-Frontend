// components/PasswordInput.tsx
"use client";
import React, { useState } from "react";
import PasswordInput from "../../../components/passwordInput";
import ConfirmPasswordInput from "../../../components/confirmPasswordInput";

const LoadPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordsMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };
  return (
    <div className="max-w-6xl mx-auto items-center justify-center mt-2 flex flex-col md:flex-row md:space-x-4">
      <div className="bg-white rounded-lg  p-4 flex-2 md:w-1/2">
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create password</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Use a minimum of 10 characters, including uppercase letters,
                lowercase letters and numbers.
              </label>
            </div>

            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Password<b className="text-red-500">*</b>
              </label>
              <PasswordInput
                password={password}
                setPassword={handlePasswordChange}
                setPasswordsMatch={setPasswordsMatch}
              />
            </div>
            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password<b className="text-red-500">*</b>
              </label>

              <ConfirmPasswordInput
                password={password} // Pass the password prop
                confirmPassword={confirmPassword}
                setPassword={handleConfirmPasswordChange}
                passwordsMatch={passwordsMatch}
                setPasswordsMatch={setPasswordsMatch}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <input
    //     type={showPassword ? 'text' : 'password'}
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     className="w-full p-3 rounded border border-gray-300"
    //   />
    //   <button
    //     type="button"
    //     onClick={togglePasswordVisibility}
    //     className="absolute inset-y-0 right-0 pr-3 flex items-center"
    //   >
    //     {showPassword ? (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6 text-gray-500 hover:text-blue-500 cursor-pointer"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M12 17s-3-3.06-4-4a3.5 3.5 0 114-4 3.5 3.5 0 014 4c-1 1.06-4 4-4 4z" />
    //         <path d="M3.27 3.27l17.46 17.46" />
    //       </svg>
    //     ) : (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6 text-gray-500 hover:text-blue-500 cursor-pointer"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <circle cx="12" cy="12" r="3" />
    //         <path d="M17 12a5 5 0 11-10 0" />
    //       </svg>
    //     )}
    //   </button>
    // </div>
  );
};

export default LoadPassword;
