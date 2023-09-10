import React from 'react';

const VerifyEmailPage: React.FC = () => {
  return (
    <div className="overflow-hidden max-h-screen flex items-center justify-center text-black">
      <div className="text-center overflow-hidden">
        <h1 className="text-4xl font-semibold">Verify Your Email</h1>
        <p className="mt-1 text-lg">
          An email has been sent to your email address for verification.
        </p>
        <p className="mt-2 text-lg">
          Please click the verification link to confirm your account.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
